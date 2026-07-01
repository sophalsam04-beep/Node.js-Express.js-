// Define API Route endpoints

const express = require('express');
const router = express.Router();

const productController = require('/self_learn18/flutter_backend/node_modules/src/controllers/productsController');

router.get("/", productController.getProducts);
router.post("/", productController.createProduct);

module.exports = router;
