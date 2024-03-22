const express = require('express');
const router = express. Router();
const { getProductData, getSingleProduct ,PostProductData, UpdateProductData} = require('../controllers/productDataController');


router.route('/productData').get(getProductData);
router.route('/productData/:id').get(getSingleProduct);
router.route('/productData').post(PostProductData);
router.route('/productData').put(UpdateProductData);
module.exports = router;