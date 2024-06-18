const express = require('express');
const router = express.Router();
const {review, getAllReview} = require('../controller/review-controller');

router.route('/').post(review);
router.route('/getAllReviews').get(getAllReview);

module.exports = router;