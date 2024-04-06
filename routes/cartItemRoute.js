const express = require('express');
const { getCartItem, PostCartItem, DeleteCartItem ,getCartItemById } = require('../controllers/cartItemController');
const router = express. Router();


router.route('/cartItem').get(getCartItem);
router.route('/cartItem/:id').get(getCartItemById);
router.route('/cartItem').post(PostCartItem);
router.route('/cartItem/:id').delete(DeleteCartItem);
// router.delete('/cartItem/:id', DeleteCartItem); 
module.exports = router; 