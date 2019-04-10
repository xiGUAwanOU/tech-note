keywords typescript, reusable, library, browser, basic, scaffolding, project, rollup
labels typescript, npm, rollup

# TypeScript: Basic Reusable Library Project for Browser
For browser, we need a single JavaScript file as dependency.

Install dependencies:
```console
npm install -D typescript tslint rollup
```

Configure TypeScript compiler (`tsconfig.json` file):
```javascript
{
  "compilerOptions": {
    "baseUrl": ".",
    "outDir": "dist",
    
    "module": "es6",
    "moduleResolution": "node",
    "target": "es6",

    "sourceMap": true,
    
    "alwaysStrict": true,
    "allowJs": true,
    "noImplicitAny": true
  }
}
```

Use following commands to compile and rollup:
```console
$ npx tsc
$ npx rollup dist/main.js --file dist/bundle.js --format umd --name "BundleName"
```

Configure TsLint (`tslint.json` file):
```javascript
{
  "defaultSeverity": "error",
  "extends": [
      "tslint:recommended"
  ],
  "jsRules": {},
  "rules": {
    "indent": [ true, "spaces", 2 ],
    "interface-name": false,
    "max-classes-per-file": false,
    "object-literal-sort-keys": false
  },
  "rulesDirectory": []
}
```

Run TsLint with following command:
```console
$ npx tslint -c tslint.json src/**/*.ts
```
