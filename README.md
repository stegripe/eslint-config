# eslint-config
> An ESLint [shareable configuration](http://eslint.org/docs/developer-guide/shareable-configs.html) that we used for our projects.

<div align="center">
<a href="https://www.npmjs.com/package/@clytage/eslint-config"><img src="https://img.shields.io/npm/v/@clytage/eslint-config?maxAge=3600" alt="NPM version" ><a/>
</div>

## Install

```bash
npm install -D @clytage/eslint-config
```
or with Yarn
```bash
yarn add -D @clytage/eslint-config
```

## Usage

[Click here](https://eslint.org/docs/user-guide/configuring#using-a-shareable-configuration-package) for more details about ESLint guide.

Example:
```json
{
    "extends": "@clytage/eslint-config"
}
```
or `"@clytage/eslint-config/node"` if you're on Node environment.


Example (TypeScript):
```json
{
    "extends": "@clytage/eslint-config/typescript",
    "parserOptions": {
      "project": "./tsconfig.json"
    },
    "ignorePatterns": [
      "dist/**",
      "node_modules/**"
    ]
}
```
or `"@clytage/eslint-config/typescript/node"` if you're on Node environment.

## Note

This package is requires [ESLint](https://npmjs.com/package/eslint) version `8.44.0` or above.

TypeScript config requires:
 * [@typescript-eslint/eslint-plugin](https://npmjs.com/package/@typescript-eslint/eslint-plugin) version `6.0.0` or above.
 * [@typescript-eslint/parser](https://npmjs.com/package/@typescript-eslint/parser) version `6.0.0` or above.
 * [typescript](https://npmjs.com/package/typescript) version `3.3.1` to `6.0.0` (ranged).
