const express = require('express');
const {PostUser, getuser,getSingleUser } = require('../controllers/userControll');
const router = express. Router();

router.route('/user').get(getuser);
router.route('/user/:id').get(getSingleUser);
router.route('/user').post(PostUser);

module.exports = router;  