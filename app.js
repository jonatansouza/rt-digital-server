'use strict';

var express = require('express')
  , app     = express();

/**
 * Route dispatcher
 */
app
  .use('/', require('./routes/home'))
  .use('/products', require('./routes/products'));
/**
 * Expose app module
 */
module.exports = app;
