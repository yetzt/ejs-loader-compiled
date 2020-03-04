# ejs-loader-compiled for webpack

Loads EJS for [webpack](http://webpack.github.io/) and minifies ES6 with [terser](https://github.com/terser/terser).

A drop-in replacement for the unmaintained [ejs-compiled-loader](https://www.npmjs.com/package/ejs-compiled-loader)

## Installation

`npm install ejs-loader-compiled`

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

``` javascript
var template = require("ejs-compiled!./file.ejs");
// => returns the template function compiled with ejs templating engine.

// And then use it somewhere in your code
template(data) // Pass object with data

// Child Templates
// path is relative to where webpack is being run
<%- include templates/child -%>
```

## License

[UNLICENSE](https://unlicense.org/UNLICENSE)



