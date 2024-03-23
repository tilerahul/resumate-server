const express = require('express');
const router = express.Router();
const {otpSender, otpVerify} = require('../controller/otp-controller');

router.route('/').post(otpSender);
router.route('/verify').post(otpVerify);

module.exports = router;