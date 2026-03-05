# Branch Validation Setup for habs-react-kit Clients

This document explains how branch validation works for client projects using the `habs-react-kit` package.

## Overview

The validation ensures that your client application's branch matches the corresponding `habs-react-kit` branch reference:
- `dev` branch → uses `habs-react-kit#dev`
- `stage` branch → uses `habs-react-kit#stage`
- `prod` branch → uses `habs-react-kit#prod`

## Automatic Validation (Recommended)

The validation runs **automatically** after installing dependencies via a `postinstall` script:

```bash
npm install
# or
pnpm install
```

The script will:
1. Determine your current Git branch
2. Check that the `habs-react-kit` dependency references the correct branch
3. Fail with a clear error if there's a mismatch

### Setup Instructions

Simply ensure your `package.json` dependencies reference the correct branch for each branch:

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

That's it! The validation will run automatically on `npm install` or `pnpm install`.

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

## GitHub Actions Workflow (Optional)

If you want to enforce validation in your CI/CD pipeline, create `.github/workflows/validate-react-kit-ref.yml`:

```yaml
name: Validate habs-react-kit ref

on:
  push:
    branches:
      - '**'
  pull_request:
    branches:
      - '**'

jobs:
  validate-ref:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm ci

      - name: Validate dependency ref for target branch
        env:
          TARGET_BRANCH: ${{ github.base_ref || github.ref_name }}
        run: node node_modules/habs-react-kit/package-branch-validation/check-habs-react-kit-branch.js
```

## How It Works

1. The validation script reads your `package.json` file
2. It determines the current Git branch (or uses `TARGET_BRANCH` env var in CI)
3. It checks that the `habs-react-kit` dependency points to the correct branch
4. If there's a mismatch, it fails with a clear error message

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

- **Postinstall script not running**: Ensure npm/pnpm is allowed to run lifecycle scripts
- **Wrong branch detected**: The script uses `git rev-parse --abbrev-ref HEAD` locally, or `TARGET_BRANCH` env var in CI
- **Dependency validation fails**: Check that your branch name matches one of the configured branches (dev, stage, prod)

