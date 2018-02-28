var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shoppingdb');
var products = [
    new Product({
        imagepath: 'http://www.mishes.com/wp-content/uploads/2012/02/videogame05.jpg',
        title: 'Xbox Game1',
        description: 'Awesome Game!',
        price: 12
    }),
    new Product({
        imagepath: 'http://www.mishes.com/wp-content/uploads/2012/02/videogame05.jpg',
        title: 'Xbox Game2',
        description: 'Awesome Game!',
        price: 15
    }),
    new Product({
        imagepath: 'http://www.mishes.com/wp-content/uploads/2012/02/videogame05.jpg',
        title: 'Xbox Game3',
        description: 'Awesome Game!',
        price: 20
    }),
    new Product({
        imagepath: 'http://www.mishes.com/wp-content/uploads/2012/02/videogame05.jpg',
        title: 'Xbox Game4',
        description: 'Awesome Game!',
        price: 25
    }),
    new Product({
        imagepath: 'http://www.mishes.com/wp-content/uploads/2012/02/videogame05.jpg',
        title: 'Xbox Game5',
        description: 'Awesome Game!',
        price: 30
    }),
    new Product({
        imagepath: 'http://www.mishes.com/wp-content/uploads/2012/02/videogame05.jpg',
        title: 'Xbox Game6',
        description: 'Awesome Game!',
        price: 35
    }),
];
var done = 0;
for (var i = 0; i < products.length; i++)
{
    products[i].save(function (err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}
function exit()
{
    mongoose.disconnect();
}

