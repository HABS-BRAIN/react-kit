import process from 'process';
import path from 'path';
import os from 'os';
import fs from 'fs';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PKG = JSON.parse(fs.readFileSync('./package.json').toString());
const IS_WINDOWS = os.platform() === 'win32';
const MAYOR_VERSION = PKG.version.split('.')[0];
const MINOR_VERSION = PKG.version.split('.')[1];
const BUG_FIX_VERSION = PKG.version.split('.')[2];

const task = process.argv.slice(2).join(' ');

run();

async function run()
{
	switch (task)
	{
		// As per NPM documentation (https://docs.npmjs.com/cli/v9/using-npm/scripts)
		// `prepare` script:
		//
		// - Runs BEFORE the package is packed, i.e. during `npm publish` and `npm pack`.
		// - Runs on local `npm install` without any arguments.
		// - NOTE: If a package being installed through git contains a `prepare` script,
		//   its dependencies and devDependencies will be installed, and the `prepare`
		//   script will be run, before the package is packaged and installed.
		//
		// So here we compile TypeScript to JavaScript.
		case 'prepare':
		{
			buildTypescript(/* force */ false);

			break;
		}

		// `postinstall` script runs after the package is installed in another project.
		// It copies validation scripts to the root of the consuming project.
		case 'postinstall':
		{
			copyValidationScripts();

			break;
		}

		case 'typescript:build':
		{
			installDeps();
			buildTypescript(/* force */ true);
			replaceVersion();

			break;
		}

		case 'typescript:watch':
		{
			deleteLib();
			executeCmd('tsc --watch');

			break;
		}

		case 'lint':
		{
			lint();

			break;
		}

		case 'test':
		{
			buildTypescript(/* force */ false);
			replaceVersion();
			test();

			break;
		}

		case 'coverage':
		{
			buildTypescript(/* force */ false);
			replaceVersion();
			executeCmd('jest --coverage');
			executeCmd('open-cli coverage/lcov-report/index.html');

			break;
		}

		case 'install-deps':
		{
			installDeps();

			break;
		}

		case 'release:check':
		{
			checkRelease();

			break;
		}

		case 'release:dev': {
			const NEW_DEV_VERSION = `${MAYOR_VERSION}.${MINOR_VERSION}.${parseInt(BUG_FIX_VERSION) + 1}`
			executeCmd(`npm version ${NEW_DEV_VERSION} --no-git-tag-version`);
			executeCmd(`git commit -am '${NEW_DEV_VERSION}'`);
			executeCmd(`git tag -a ${NEW_DEV_VERSION} -m '${NEW_DEV_VERSION}'`);
			executeCmd(`git push origin '${NEW_DEV_VERSION}'`);
		}

		case 'release':
		{
			checkRelease();
			executeCmd(`git commit -am '${PKG.version}'`);
			executeCmd(`git tag -a ${PKG.version} -m '${PKG.version}'`);
			executeCmd(`git push origin '${PKG.version}'`);
			// executeCmd('npm publish');

			break;
		}

		default:
		{
			logError('unknown task');

			exitWithError();
		}
	}
}

function replaceVersion()
{
	logInfo('replaceVersion()');

	const processFile = (filePath) => {
		if (!filePath.endsWith('.d.ts')) {
			return;
		}

		const text = fs.readFileSync(filePath, { encoding: 'utf8' });
		const result = text.replace(/__MEDIASOUP_CLIENT_VERSION__/g, PKG.version);

		fs.writeFileSync(filePath, result, { encoding: 'utf8' });
	};

	const traverseDirectory = (dir) => {
		const entries = fs.readdirSync(dir, { withFileTypes: true });

		for (const entry of entries) {
			const fullPath = path.join(dir, entry.name);

			if (entry.isDirectory()) {
				traverseDirectory(fullPath);
			} else if (entry.isFile()) {
				processFile(fullPath);
			}
		}
	};

	traverseDirectory('lib');
}

function copyValidationScripts()
{
	const logFile = path.join(process.cwd(), '.habs-react-kit-postinstall.log');
	
	function appendLog(message)
	{
		try
		{
			const timestamp = new Date().toISOString();
			fs.appendFileSync(logFile, `[${timestamp}] ${message}\n`);
		}
		catch (e)
		{
			// Ignore log file errors
		}
		console.error(`[postinstall] ${message}`);
	}

	logInfo('copyValidationScripts()');
	appendLog('Starting copyValidationScripts');

	try
	{
		// During postinstall, __dirname is the root of habs-react-kit package
		const sourceDir = path.join(__dirname, 'package-branch-validation');
		
		appendLog(`__dirname: ${__dirname}`);
		appendLog(`process.cwd(): ${process.cwd()}`);
		appendLog(`INIT_CWD env: ${process.env.INIT_CWD || 'undefined'}`);
		appendLog(`npm_package_json env: ${process.env.npm_package_json || 'undefined'}`);
		
		// Try to find the consuming project root
		let targetDir = null;
		
		// Method 1: Use INIT_CWD environment variable (set by npm/pnpm to original working directory)
		if (process.env.INIT_CWD && process.env.INIT_CWD !== __dirname)
		{
			targetDir = process.env.INIT_CWD;
			appendLog(`Using INIT_CWD to find targetDir: ${targetDir}`);
		}
		
		// Method 2: If sourceDir is in node_modules, extract project root from path
		if (!targetDir && sourceDir.includes('node_modules'))
		{
			const parts = sourceDir.split('node_modules');
			if (parts.length > 0)
			{
				targetDir = parts[0].replace(/\/$/, ''); // Remove trailing slash
				appendLog(`Using node_modules path parsing to find targetDir: ${targetDir}`);
			}
		}
		
		// Method 3: Use process.cwd() as fallback
		if (!targetDir)
		{
			targetDir = process.cwd();
			appendLog(`Using process.cwd() as targetDir: ${targetDir}`);
		}

		appendLog(`Source dir: ${sourceDir}`);
		appendLog(`Target dir: ${targetDir}`);

		// Check if source directory exists
		if (!fs.existsSync(sourceDir))
		{
			appendLog(`ERROR: Source directory not found: ${sourceDir}`);
			logWarn(`Source validation scripts directory not found: ${sourceDir}`);
			return;
		}

		// Check if target directory is valid
		if (!fs.existsSync(targetDir))
		{
			appendLog(`ERROR: Target directory not found: ${targetDir}`);
			logError(`Target directory not found: ${targetDir}`);
			return;
		}

		// Check if we're in development mode (installing from local package)
		// Only skip if target and source are literally the same directory
		if (sourceDir === targetDir || targetDir === __dirname)
		{
			appendLog(`SKIP: Development mode detected - source and target are the same location`);
			logInfo('Skipping copy: installing from local package in development mode');
			return;
		}

		const files = fs.readdirSync(sourceDir);
		appendLog(`Found files in source: ${files.join(', ')}`);

		let copiedCount = 0;
		files.forEach(file => {
			const sourceFile = path.join(sourceDir, file);
			const targetFile = path.join(targetDir, file);

			try
			{
				// Skip directories, only copy files
				const stats = fs.statSync(sourceFile);
				if (stats.isFile())
				{
					fs.copyFileSync(sourceFile, targetFile);
					appendLog(`SUCCESS: Copied ${file} to ${targetFile}`);
					logInfo(`Copied: ${file}`);
					copiedCount++;
				}
			}
			catch (err)
			{
				appendLog(`ERROR copying ${file}: ${err.message}`);
			}
		});

		appendLog(`DONE: Copied ${copiedCount} validation script files`);
		logInfo(`Validation scripts copied successfully (${copiedCount} files).`);
	}
	catch (error)
	{
		appendLog(`FATAL ERROR: ${error.message}`);
		appendLog(`Stack: ${error.stack}`);
		logError(`Failed to copy validation scripts: ${error.message}`);
		// Don't exit with error, as this is not critical for the installation
	}
}

function deleteLib()
{
	if (!fs.existsSync('lib'))
	{
		return;
	}

	logInfo('deleteLib()');

	if (!IS_WINDOWS)
	{
		executeCmd('rm -rf lib');
	}
	else
	{
		// NOTE: This command fails in Windows if the dir doesn't exist.
		executeCmd('rmdir /s /q "lib"', /* exitOnError */ false);
	}
}

function buildTypescript(force = false)
{
	if (!force && fs.existsSync('lib'))
	{
		return;
	}

	logInfo('buildTypescript()');

	deleteLib();
	executeCmd('tsc');

	// Copy the shared-types folder to the lib directory
	const sharedTypesDir = path.resolve('src', 'shared-types');
	const libSharedTypesDir = path.resolve('lib', 'shared-types');
	if (fs.existsSync(sharedTypesDir)) {
		fs.mkdirSync(libSharedTypesDir, { recursive: true });
		fs.readdirSync(sharedTypesDir).forEach(file => {
			fs.copyFileSync(path.join(sharedTypesDir, file), path.join(libSharedTypesDir, file));
		});
		logInfo('Copied shared-types to lib directory.');
	}
}

// function generateTypeExports() {
// 	logInfo('generateTypeExports()');

// 	const typesDir = path.resolve('shared-types');
// 	const indexFilePath = path.resolve('src', 'index.ts');

// 	if (!fs.existsSync(typesDir)) {
// 		logError(`Types directory not found: ${typesDir}`);
// 		return;
// 	}

// 	const typeFiles = fs.readdirSync(typesDir).filter(file => file.endsWith('.ts'));
// 	const exportStatements = typeFiles.map(file => `export * from '../shared-types/${file.replace('.ts', '')}';`).join('\n');

// 	const indexContent = fs.readFileSync(indexFilePath, 'utf8');
// 	const updatedContent = indexContent + '\n' + exportStatements + '\n';

// 	fs.writeFileSync(indexFilePath, updatedContent, 'utf8');
// 	logInfo('Type exports generated successfully.');
// }

function lint()
{
	logInfo('lint()');

	try 
	{
		executeCmd('prettier  --loglevel warn --write \"./**/*.{ts,js,tsx,css,scss,md,json}\"');
		executeCmd('eslint ./src --ext .tsx,.ts,.js --quiet --fix --ignore-path ./.gitignore');
	}
	catch (error) 
	{
		logError(`Linting failed after attempting to fix issues: ${ error.message}`);
		process.exit(1);
	}
}

function test()
{
	logInfo('test()');

	executeCmd('jest');
}

function installDeps()
{
	logInfo('installDeps()');

	// Install/update deps using pnpm.
	executeCmd('pnpm install --frozen-lockfile');
	// Update pnpm-lock.yaml if necessary.
	executeCmd('pnpm install --lockfile-only');
}

function checkRelease()
{
	logInfo('checkRelease()');

	installDeps();
	buildTypescript(/* force */ true);
	replaceVersion();
	lint();
	// test();
}

function executeCmd(command, exitOnError = true)
{
	logInfo(`executeCmd(): ${command}`);

	try
	{
		execSync(command, { stdio: [ 'ignore', process.stdout, process.stderr ] });
	}
	catch (error)
	{
		if (exitOnError)
		{
			logError(`executeCmd() failed, exiting: ${error}`);

			exitWithError();
		}
		else
		{
			logInfo(`executeCmd() failed, ignoring: ${error}`);
		}
	}
}

function logInfo(message)
{
	// eslint-disable-next-line no-console
	console.log(`npm-scripts \x1b[36m[INFO] [${task}]\x1b\[0m`, message);
}

// eslint-disable-next-line no-unused-vars
function logWarn(message)
{
	// eslint-disable-next-line no-console
	console.warn(`npm-scripts \x1b[33m[WARN] [${task}]\x1b\[0m`, message);
}

function logError(message)
{
	// eslint-disable-next-line no-console
	console.error(`npm-scripts \x1b[31m[ERROR] [${task}]\x1b\[0m`, message);
}

function exitWithError()
{
	process.exit(1);
}