const fs = require('node:fs');
const path = require('node:path');
const { execSync } = require('node:child_process');

const PACKAGE_NAME = 'habs-react-kit';
const packageJsonPath = path.resolve(process.cwd(), 'package.json');

// Check if habs-react-kit is in dependencies
if (!fs.existsSync(packageJsonPath)) {
  process.exit(0);
}

const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const dependencyRef = packageJson.dependencies?.[PACKAGE_NAME];

// Only proceed if habs-react-kit is a dependency
if (!dependencyRef) {
  process.exit(0);
}

// Paths
const workflowDir = path.resolve(process.cwd(), '.github', 'workflows');
const workflowFile = path.join(workflowDir, 'validate-react-kit-ref.yml');
const sourceWorkflowFile = path.join(__dirname, 'validate-react-kit-ref.yml');
const checkScriptFile = path.join(__dirname, 'check-habs-react-kit-branch.js');

try {
  // Create .github/workflows directory if it doesn't exist
  if (!fs.existsSync(workflowDir)) {
    fs.mkdirSync(workflowDir, { recursive: true });
    console.log(`✅ Created .github/workflows directory`);
  }

  // Copy workflow file if it doesn't exist
  if (!fs.existsSync(workflowFile)) {
    fs.copyFileSync(sourceWorkflowFile, workflowFile);
    console.log(`✅ Copied validate-react-kit-ref.yml to .github/workflows/`);
  } else {
    console.log(`ℹ️  .github/workflows/validate-react-kit-ref.yml already exists, skipping copy`);
  }

  // Run validation
  execSync(`node "${checkScriptFile}"`, { stdio: 'inherit' });
} catch (error) {
  process.exit(1);
}
