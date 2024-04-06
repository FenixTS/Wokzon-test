const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
    id: String,
    userId:String ,
    productId: String,
    quantity: Number
});

const cartItemModel = mongoose.model('cartItem', cartItemSchema);

module.exports = cartItemModel;
 