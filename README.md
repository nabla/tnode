# tnode [![npm](https://img.shields.io/npm/v/@nabla/tnode)](https://www.npmjs.com/package/@nabla/tnode)

Simple node wrapper that runs esbuild on TS files.

## Install

```shell
npm i -D @nabla/tnode
```

- For `esbuild@0.17` use `@nabla/tnode@0.9` (latest)
- For `esbuild@0.16` use `@nabla/tnode@0.8`
- For `esbuild@0.15` use `@nabla/tnode@0.7`

## Usage in package.json scripts

```json
{
  "scripts": {
    "codegen": "tnode scripts/codegen.ts"
  }
}
```

## Usage with Jest

Add in `package.json`

```json
{
  "jest": {
    "rootDir": "src",
    "transform": {
      "\\.ts": "@nabla/tnode/jest"
    }
  }
}
```

## Usage in independent scripts

```shell
npm i -g @nabla/tnode
```

```ts
#!/usr/bin/env tnode

console.log("It just works!");
```
