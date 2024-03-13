const express = require('express');
const router = express. Router();
const { getProductData, getSingleProduct ,PostProductData} = require('../controllers/productDataController');


router.route('/productData').get(getProductData);
router.route('/productData/:id').get(getSingleProduct);
router.route('/productData').post(PostProductData);
module.exports = router;