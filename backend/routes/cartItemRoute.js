const express = require('express');
const { getCartItem } = require('../controllers/cartItemController');
const router = express. Router();


router.route('/cartItem').get(getCartItem);

module.exports = router;