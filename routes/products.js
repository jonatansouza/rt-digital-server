'use strict';

var express = require('express'),
    router = express.Router(),
    products = require('../controllers/products');

router
    .route('/')
    .get(products.getProducts);

router
    .route('/filter/:type/:query')
    .get(products.filterProducts);

router
    .route('/categories')
    .get(products.getCategories);

router
    .route('/stores')
    .get(products.getStores);
/**
 * Expose router module
 */
module.exports = router;
