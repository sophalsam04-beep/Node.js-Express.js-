// app.js
// Configure the applications Express

const express = require('express');
const cors = require('cors');

const productRoute = require('/self_learn18/flutter_backend/node_modules/src/route/productRoute');

const app = express();

// Flutter connected
    app.use(cors());
    app.use(express.json());

        app.use("/api/products", productRoute);
    module.exports = app;

