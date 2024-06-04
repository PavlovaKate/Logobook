// controllers/userController.js

const router = require('express').Router();
const {
  Category,
  Publisher,
  Author,
  Book,
  TagLine,
  Tag,
  RateLine,
  Rate,
  Review,
  Image,
  ShopLine,
  Shop,
  Favourite,
  CartLine,
  Cart,
} = require('../db/models');

exports.getAllBooks = async (req, res) => {
  try {
    const booksInDB = await Book.findAll({
      include: [
        { model: TagLine, include: [Tag] },
        { model: RateLine, include: [Rate] },
        { model: Review, include: [Image] },
        { model: ShopLine, include: [Shop] },
        { model: CartLine, include: [Cart] },
        Favourite,
      ],
    });

    const authors = await Author.findAll();
    const categories = await Category.findAll();
    const publishers = await Publisher.findAll();

    const books = booksInDB.map(({ dataValues }) => {
      const author = authors.find((el) => el.id === dataValues.authorId);
      const category = categories.find((el) => el.id === dataValues.categoryId);
      const publisher = publishers.find(
        (el) => el.id === dataValues.publisherId
      );
      return {
        ...dataValues,
        author: author.name,
        category: category.name,
        publisher: publisher.name,
      };
    });

    res.json({ message: 'success', books });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

exports.addToCart = async (req, res) => {
  try {
    const { id } = req.params;

    let cart = await Cart.findOne({
      where: { userId: +res.locals.user.id, cartStatus: false },
      include: [CartLine],
    });
    if (!cart) {
      cart = await Cart.create({
        userId: +res.locals.user.id,
        cartStatus: false,
        totalAmount: 0,
        orderStatus: 'Не оформлен',
      });
    }
    let cartline = cart.CartLines.find((cartline) => cartline.bookId === +id);
    if (cartline) {
      const count = cartline.count + 1;
      await CartLine.update({ count }, { where: { id: cartline.id } });
      cartline = cart.CartLines.find((cartline) => cartline.bookId === +id);
      res.json({ message: 'increase', cartline });
    } else {
      cartline = await CartLine.create({
        bookId: +id,
        cartId: cart.id,
        count: 1,
      });
      res.json({ message: 'create', cartline });
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};
