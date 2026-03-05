const fs = require('node:fs');
const path = require('node:path');
const { execSync } = require('node:child_process');

const PACKAGE_NAME = 'habs-react-kit';
const REQUIRED_REF_BY_BRANCH = {
  prod: 'prod',
  stage: 'stage',
};

const envTargetBranch = process.env.TARGET_BRANCH || process.env.GITHUB_REF_NAME || '';
const packageJsonPath = path.resolve(process.cwd(), 'package.json');

function getGitBranchName() {
  try {
    return execSync('git rev-parse --abbrev-ref HEAD', {
      stdio: ['ignore', 'pipe', 'ignore'],
      encoding: 'utf8',
    }).trim();
  } catch {
    return '';
  }
}

const targetBranch = envTargetBranch || getGitBranchName();

function fail(message) {
  console.error(`❌ ${message}`);
  process.exit(1);
}

function info(message) {
  console.log(`ℹ️ ${message}`);
}

if (!fs.existsSync(packageJsonPath)) {
  fail(`package.json not found at ${packageJsonPath}`);
}

const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const dependencyRef = packageJson.dependencies?.[PACKAGE_NAME];

if (!dependencyRef) {
  fail(`Dependency "${PACKAGE_NAME}" is missing in package.json dependencies`);
}

const requiredRef = REQUIRED_REF_BY_BRANCH[targetBranch];

if (!requiredRef) {
  info(
    `No branch rule configured for "${targetBranch || 'unknown'}". Skipping dependency ref validation.`,
  );
  process.exit(0);
}

const gitHubRefPattern = new RegExp(
  `^github:HABS-BRAIN/react-kit#${requiredRef.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&')}$`,
);

if (!gitHubRefPattern.test(dependencyRef)) {
  fail(
    `On branch "${targetBranch}", "${PACKAGE_NAME}" must be "github:HABS-BRAIN/react-kit#${requiredRef}" but found "${dependencyRef}"`,
  );
}

info(
  `Dependency "${PACKAGE_NAME}" correctly points to "github:HABS-BRAIN/react-kit#${requiredRef}" for branch "${targetBranch}".`,
);
