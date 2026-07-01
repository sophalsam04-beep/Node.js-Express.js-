// Controller
// Receive request and return respone

const express = require('express');
const cors = require('cors');

const productService = require('/self_learn18/flutter_backend/node_modules/src/service/productService');

const getProducts = (req, res)=> {
    
        // store data
        const products = productService.getProducts();
    res.json(products);
    
};


const createProducts = (req, res) => {
    const product = productService.createProducts(req.body);

        res.status(201).json(product);
};

module.exports = {
    getProducts, 
    createProducts,
};

// Controller should contain bussiness logic