const router = require('express').Router();
const { Review } = require('../db/models');

exports.addReview = async (req, res) => {
  try {
    const { userId, bookId, review } = req.body;
    const reviewInDb = await Review.create({
      userId,
      bookId,
      review,
    });
    res.json({ message: 'succsesse', review: reviewInDb });
    // }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};
