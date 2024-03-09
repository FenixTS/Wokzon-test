const express = require('express');
const router = express. Router();
const { getProductData, getSingleProduct } = require('../controllers/productDataController');


router.route('/productData').get(getProductData);
router.route('/product/:id').get(getSingleProduct);
module.exports = router;