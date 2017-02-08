var express = require('express');
const fs = require('fs');
var app = express();
//var cors = require('cors');

//app.use(cors());

function fetchList() {
    var list = fs.readFileSync('products.json');
    return JSON.parse(list);
}

app.get('/category', function(req, res) {
    var categories = [];
    fetchList().forEach(function(el, idx) {
        categories.push(el.category);
    });
		res.json(categories.filter(function(currentValue, index, arr) {
			return arr.indexOf(currentValue) == index;
    }));
});


app.get('/store', function(req, res) {
    var stores = [];
    fetchList().forEach(function(el, idx) {
        stores.push(el.store);
    });
		res.json(stores.filter(function(currentValue, index, arr) {
			return arr.indexOf(currentValue) == index;
    }));
});

app.get('/products', function(req, res) {
    res.json(fetchList());
});
app.get('/products/:type/:query', function(req, res) {
    if (req.params.type === 'store') {
        res.json(fetchList().filter(function(currentValue, index, arr) {
            return currentValue.store === req.params.query;
        }));
    } else if (req.params.type === 'category') {
        res.json(fetchList().filter(function(currentValue, index, arr) {
            return currentValue.category === req.params.query;
        }));
    } else if (req.params.type === 'price') {
        var start = req.params.query.split('x')[0];
        var end = req.params.query.split('x')[1];
        res.json(fetchList().filter(function(currentValue, index, arr) {
            return (currentValue.price >= start && currentValue.price <= end);
        }));
    }
});
require('http').createServer(app).listen(process.env.PORT || 4000);
console.log('Server Running');
