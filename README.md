# eslint-config
> An ESLint [shareable configuration](http://eslint.org/docs/developer-guide/shareable-configs.html) that used in our projects.

<div align="center">
<a href="https://www.npmjs.com/package/@clytage/eslint-config"><img src="https://img.shields.io/npm/v/@clytage/eslint-config?maxAge=3600" alt="NPM version" ><a/>
</div>

## Install

```bash
npm install -D @clytage/eslint-config
```
or with yarn
```bash
yarn add -D @clytage/eslint-config
```

## Usage

ESLint guide: [link](https://eslint.org/docs/user-guide/configuring#using-a-shareable-configuration-package)

Example:
```json
{
    "extends": "@clytage/eslint-config"
}
```
or `"@clytage/eslint-config/node"` for Node environment


Example (TS):
```json
{
    "extends": "@clytage/eslint-config/typescript"
}
```
or `"@clytage/eslint-config/typescript/node"` for Node environment

## Note

Requires [ESLint](https://npmjs.com/package/eslint) version 8.13.0 or above

TypeScript config requires:
 * [@typescript-eslint/parser](https://npmjs.com/package/@typescript-eslint/parser) version 5.18.0 or above
 * [@typescript-eslint/eslint-plugin](https://npmjs.com/package/@typescript-eslint/eslint-plugin) version 5.18.0 or above
 * [typescript](https://npmjs.com/package/typescript) version 3.3.1 to 4.7.0
