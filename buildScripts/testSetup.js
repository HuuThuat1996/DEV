//this file isn't transpiled, so much use CommonJS and ES5
// register babel to transpiled before our tests run
require('babel-register')();
// disable webpack features that Mocha doesn't understand.
require.extensions['.css'] = function () {};
