'use strict';
const fs = require('fs');
const path = require('path');
/**
 * Read json file
 */
exports.fetchList = (req, res) => {
      var list = fs.readFileSync(path.join(process.cwd(), '/data/products.json'));
      return JSON.parse(list);
};
