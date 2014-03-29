'use strict';

// The Modelizer library
var modelizer = require('modelizer');
modelizer.runSimpleServer(__dirname, 8080, 'mongodb://127.0.0.1/sw-mgmt');

// importing our defined models
var models = require('./models');

