# Branch Validation Setup for habs-react-kit Clients

This document explains how to set up branch validation in your client project that uses the `habs-react-kit` package.

## Overview

The validation ensures that your client application's branch matches the corresponding `habs-react-kit` branch reference:
- `dev` branch → uses `habs-react-kit#dev`
- `stage` branch → uses `habs-react-kit#stage`
- `prod` branch → uses `habs-react-kit#prod`

## Setup Instructions

### 1. Add the GitHub Actions Workflow

Copy the workflow file from the package to your client's GitHub Actions:

```bash
mkdir -p .github/workflows
cp node_modules/habs-react-kit/package-branch-validation/validate-react-kit-ref.yml .github/workflows/
```

Or manually create `.github/workflows/validate-react-kit-ref.yml` with this content:

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
        run: npm install

      - name: Validate dependency ref for target branch
        env:
          TARGET_BRANCH: ${{ github.base_ref || github.ref_name }}
        run: node node_modules/habs-react-kit/package-branch-validation/check-habs-react-kit-branch.js
```

### 2. Add npm Script (Optional)

Add this script to your `package.json` for local validation:

```json
{
  "scripts": {
    "validate:react-kit": "node node_modules/habs-react-kit/package-branch-validation/check-habs-react-kit-branch.js"
  }
}
```

Then run it locally:

```bash
npm run validate:react-kit
```

### 3. Configure Branch Rules

Update `package.json`'s `dependencies` section with the appropriate reference based on your branch:

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

- **Script not found**: Ensure `habs-react-kit` is installed in `node_modules`
- **Wrong branch detected**: The script uses `git rev-parse --abbrev-ref HEAD` locally, or `TARGET_BRANCH` env var in CI
- **Dependency validation fails**: Check that your branch name matches one of the configured branches (dev, stage, prod)
