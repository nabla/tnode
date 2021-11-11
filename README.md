# tnode

Simple node wrapper that runs esbuild on TS files

## Install

```shell
yarn install -g @nabla/tnode
```

## Usage in package.json scripts 

```json
{
  "scripts": {
    "codegen": "tnode scripts/codegen.ts"
  }
}
```

## Usage in independent scripts

```ts
#!/usr/bin/env tnode

console.log("It just works!")
```

## Usage with Jest

Add in `package.json`

```json
{
  "jest": {
    "rootDir": "src",
    "transform": {
      "\\.ts": " tnode-jest"
    }
  }
}
```
