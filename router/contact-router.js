const express = require('express');
const router = express.Router();
const {contact, getAllContact} = require('../controller/contact-controller');

router.route('/').post(contact);
router.route('/contacts').get(getAllContact);

module.exports = router;