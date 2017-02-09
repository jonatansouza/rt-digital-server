'use strict';

var util = require('../utils/reader');
/**
 * Root path
 */
exports.getProducts = (req, res) => {
    res.json(util.fetchList());
};

exports.filterProducts = (req, res) => {
    if (req.params.type === 'store') {
        res.json(util.fetchList().filter(function(currentValue, index, arr) {
            return currentValue.store === req.params.query;
        }));
    } else if (req.params.type === 'category') {
        res.json(util.fetchList().filter(function(currentValue, index, arr) {
            return currentValue.category === req.params.query;
        }));
    } else if (req.params.type === 'price') {
        var start = req.params.query.split('x')[0];
        var end = req.params.query.split('x')[1];
        res.json(util.fetchList().filter(function(currentValue, index, arr) {
            return (currentValue.price >= start && currentValue.price <= end);
        }));
    }
};

exports.getCategories = (req, res) => {
    var categories = [];
    util.fetchList().forEach(function(el, idx) {
        categories.push(el.category);
    });
    res.json(categories.filter(function(currentValue, index, arr) {
        return arr.indexOf(currentValue) == index;
    }));
};

exports.getStores = (req, res) => {
    var stores = [];
    util.fetchList().forEach(function(el, idx) {
        stores.push(el.store);
    });
    res.json(stores.filter(function(currentValue, index, arr) {
        return arr.indexOf(currentValue) == index;
    }));
};
