const express = require('express');
const router = express.Router();
const {otpSender, otpVerify, resetOTP, resetVerify} = require('../controller/otp-controller');

router.route('/').post(otpSender);
router.route('/verify').post(otpVerify);
router.route('/resetOTP').post(resetOTP);
router.route('/resetVerify').post(resetVerify);

module.exports = router;