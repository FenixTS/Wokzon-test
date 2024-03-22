const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    id: String,
    firstName: String,
    lastName: String,
    profession: String,
    category: String,
    address: String,
    district: String,
    state: String,
    postalCode: String,
    email: String,
    phoneNumber: String,
    whatsAppNumber: String,
    salary: Number,
    description: String,
    imagePath: String,
    createProfessionAccount: Boolean,
    createdAt: { type: Date, default: Date.now }

   
});
 
const productModel =mongoose.model('productData', productSchema);

module.exports = productModel;