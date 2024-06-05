const router = require('express').Router();
const { Book, Category } = require('../db/models');

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll({ include: [Book] });
    res.json({ message: 'success', categories });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};
