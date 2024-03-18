const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
    id: String,
    userId: Number,
    productId: String,
    quantity: Number
});

const cartItemModel = mongoose.model('cartItem', cartItemSchema);

module.exports = cartItemModel;
 