const express = require('express');
const { postuser } = require('../controllers/usersController');
const router = express. Router();



router.route('/user').post(postuser);

module.exports = router;