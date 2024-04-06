const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: String,
    name: String,
    phone:String,
    email: String,
    password: String,
    imagePath:String,

});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel; 