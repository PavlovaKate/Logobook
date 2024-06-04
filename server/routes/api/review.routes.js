const router = require('express').Router();
const reviewController = require('../../controllers/reviewController');

router.post('/add', reviewController.addReview);

module.exports = router;
