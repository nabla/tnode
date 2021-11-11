# tnode

Simple node wrapper that runs esbuild on TS files

## Install

```shell
yarn add @nabla/tnode
```

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
yarn global add @nabla/tnode
```

```ts
#!/usr/bin/env tnode

console.log("It just works!")
```
