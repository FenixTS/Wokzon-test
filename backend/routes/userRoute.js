const express = require('express');
const { createUser } = require('../controllers/userControll');
const router = express. Router();

router.route('/user').post(createUser);

module.exports = router; 