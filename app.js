'use strict';

var express = require('express')
  , app     = express()
  , cors    = require('./lib/cors');

/**
* APP USE CORS
*/
app.use(cors());

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
