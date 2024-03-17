const express = require('express');
const { uploadImage } = require('../controllers/imageController');
const router = express. Router();


router.route('/upload').post(uploadImage);

module.exports = router;  