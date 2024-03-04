const express = require('express');
const router = express.Router();
const resume = require('../controller/resume-controller');

router.route('/').post(resume);

module.exports = router;