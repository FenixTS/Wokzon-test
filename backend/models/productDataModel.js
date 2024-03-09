const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    id: String,
    profession: String,
    salary: String,
    image: String,
    rating: Number,
    quantity: Number,
    personName: String,
    phoneNumber: String,
    whatsappNumber: String,
    email: String,
    district: String, // corrected field name
    state: String,
    city: String,
    street: String,
    availability: String,
    previousPrice: String,
    experience: String,
    description: String,
    createdAt: { type: Date, default: Date.now }
});
 
const productModel =mongoose.model('productData', productSchema);

module.exports = productModel;