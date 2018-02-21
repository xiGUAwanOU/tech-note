# Typescript Setup

This article may soon deprecated, because Vue.js is going to have the offcial TypeScript support. The main goal here is to only use TypeScript for Vue.js project, no JavaScript is supported.

## 1. Basic TypeScript Support

First of all, create a Vue.js project:

```console
$ vue init webpack
```

I haven't added supports for eslint, unit test or e2e test.

Then, add TypeScript support:

```console
$ yarn add -D typescript ts-loader
```

Add a `tsconfig.json` file to the root path of the project, the content is based on Vue.js official documentation:

```json
{
  "compilerOptions": {
    "target": "es5",
    "sourceMap": true,
    "strict": true,
    "module": "es2015",
    "moduleResolution": "node"
  }
}
```

Modify the `build/vue-loader.conf.js` file:

```diff
 module.exports = {
   loaders: utils.cssLoaders({
     sourceMap: sourceMapEnabled,
     extract: isProduction
   }),
+  esModule: true,
```

Modify the `build/webpack.base.conf.js` file:

```diff
   entry: {
-    app: './src/main.js'
+    app: './src/main.ts'
   },
   output: {
     path: config.build.assetsRoot,
     filename: '[name].js',
     publicPath: process.env.NODE_ENV === 'production'
       ? config.build.assetsPublicPath
       : config.dev.assetsPublicPath
   },
   resolve: {
-    extensions: ['.js', '.vue', '.json'],
+    extensions: ['.ts', '.js', '.vue', '.json'],
     alias: {
       'vue$': 'vue/dist/vue.esm.js',
       '@': resolve('src'),
     }
   },
   module: {
     rules: [
       {
         test: /\.vue$/,
         loader: 'vue-loader',
         options: vueLoaderConfig
       },
       {
-        test: /\.js$/,
-        loader: 'babel-loader',
-        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
+        test: /\.ts$/,
+        loader: 'ts-loader',
+        include: [resolve('src'), resolve('test')],
+        exclude: /node_modules/,
+        options: {
+          appendTsSuffixTo: [/\.vue$/]
+        }
       },
```

Change the extension of `src/main.js` and `src/router/index.js` from "js" to "ts". And add `lang="ts"` attribute to all the `<script></script>` tags in component definitions.

**TODO: check if it is OK to remove the babel-loader, since we are not using it anymore.**

## 2. Tslint Configuration

It is said that the developer team of Vue.js prefers eslint with TypeScript plugin as the linter solution. However I didn't manage to achieve that. In the future, there will be TypeScript support in `vue-cli`. However, now we have to stick on `tslint`.
