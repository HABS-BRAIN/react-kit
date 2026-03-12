# HABS shared logic and interfaces for typescript apps.

to publish new dev version please use `npm run release:dev` it will make and push new tag for this package like: _X.X.X+1_

**_keep in mind to update package version *package.json* in projects that are using this package where it is necessary_**

to test this package locally follow this steps:

1. `npm install -g npm-sync`
2. in auxasphere-react-kit project execute `npm run typescript:build`
3. then in project you are using this lib run `rm -rf ./node_modules/auxasphere-react-kit/ && npm-sync --src /home/bogdan/TemmaCare/auxasphere-react-kit/ --dest /home/bogdan/TemmaCare/min-app-auxasphere-react-kits/ --yes` p.s. don't need to stop server to see changesL
4. in project that use this package run `npm install auxasphere-react-kit`


pnpm install git+ssh://git@github.com:HABS-BRAIN/react-kit.git#dev

---

## Versioning & Tagging

Bump version and create a git tag:

```bash
pnpm version patch   # 1.0.0 → 1.0.1
pnpm version minor   # 1.0.0 → 1.1.0
pnpm version major   # 1.0.0 → 2.0.0
```

### Push the new tag to remote

```bash
git push origin --tags
```

Or push a specific tag:

```bash
git push origin v1.0.1
```

### Remove a tag locally

```bash
git tag -d v1.0.1
```

### Remove a tag from remote

```bash
git push origin --delete v1.0.1
```