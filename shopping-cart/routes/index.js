var express = require('express');
var router = express.Router();
var Product = require('../models/product');

/* GET home page. */
router.get('/', function (req, res, next) {
    Product.find(function (err, docs) {
        var ProductChunck = [];
        var chunksize = 3;
        console.log(docs.length);
        for (var i = 0; i < docs.length; i += chunksize)
        {
            ProductChunck.push(docs.slice(i, i + chunksize));
        }
       // console.log(ProductChunck.length);
        res.render('shop/index', { title: 'Shopping Cart', products: ProductChunck });
    });
   
});

module.exports = router;
