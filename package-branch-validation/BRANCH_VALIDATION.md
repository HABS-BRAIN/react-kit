# Branch Validation Setup for habs-react-kit Clients

This document explains how branch validation works for client projects using the `habs-react-kit` package.

## Overview

The validation ensures that your client application's branch matches the corresponding `habs-react-kit` branch reference:
- `dev` branch → uses `habs-react-kit#dev`
- `stage` branch → uses `habs-react-kit#stage`
- `prod` branch → uses `habs-react-kit#prod`

## Automatic Setup (No Configuration Needed!)

When your client installs the `habs-react-kit` package, the postinstall script automatically:
1. Creates the `.github/workflows/` directory
2. **Copies the validation workflow** to `.github/workflows/validate-react-kit-ref.yml`
3. Validates that the dependency reference matches the current branch

Just install and everything is set up:

```bash
npm install
# or
pnpm install
```

That's it! No manual file copying needed.

## Configuration

Ensure your `package.json` dependencies reference the correct branch for each branch:

**For dev branch:**
```json
{
  "dependencies": {
    "habs-react-kit": "github:HABS-BRAIN/react-kit#dev"
  }
}
```

**For stage branch:**
```json
{
  "dependencies": {
    "habs-react-kit": "github:HABS-BRAIN/react-kit#stage"
  }
}
```

**For prod branch:**
```json
{
  "dependencies": {
    "habs-react-kit": "github:HABS-BRAIN/react-kit#prod"
  }
}
```

## Manual Validation (Optional)

Add this script to your `package.json` for manual validation at any time:

```json
{
  "scripts": {
    "validate:react-kit": "node node_modules/habs-react-kit/package-branch-validation/check-habs-react-kit-branch.js"
  }
}
```

Then run it manually:

```bash
npm run validate:react-kit
```

## GitHub Actions Workflow

The workflow file is automatically copied to `.github/workflows/validate-react-kit-ref.yml` during installation. It will:
- Run on every push to any branch
- Run on all pull requests
- Validate that the dependency reference matches the target branch
- Fail the check if there's a mismatch

No manual setup is needed - just commit and push!

## How It Works

1. During `npm install` / `pnpm install`, the postinstall script runs automatically
2. It checks if `habs-react-kit` is in your dependencies
3. If found, it copies the GitHub Actions workflow to `.github/workflows/`
4. It validates that the dependency reference matches your current Git branch
5. If there's a mismatch, installation fails with a clear error message

## Error Messages

**Incorrect reference:**
```
❌ On branch "dev", "habs-react-kit" must be "github:HABS-BRAIN/react-kit#dev" but found "github:HABS-BRAIN/react-kit#stage"
```

**No branch rule configured:**
```
ℹ️ No branch rule configured for "feature-branch". Skipping dependency ref validation.
```

## Troubleshooting

- **Postinstall script not running**: Ensure npm/pnpm is allowed to run lifecycle scripts. Check your .npmrc or pnpm config.
- **Wrong branch detected**: The script uses `git rev-parse --abbrev-ref HEAD` locally, or `TARGET_BRANCH` env var in CI
- **Dependency validation fails**: Check that your branch name matches one of the configured branches (dev, stage, prod)
- **Workflow not copied**: The script only copies the workflow if `habs-react-kit` is in your dependencies
