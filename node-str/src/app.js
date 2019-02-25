'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://apiweb:apiweb@cluster0-0w0ca.azure.mongodb.net/test?retryWrites=true');

const app = express();
const router = express.Router();

const Product = require('../src/models/product-model');

const index = require('./routes/index');
const productsRouters = require('./routes/products')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/', index);
app.use('/products', productsRouters);

module.exports = app;