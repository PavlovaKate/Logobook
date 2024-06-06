// controllers/userController.js

const router = require('express').Router();
const { CartLine, Cart, Book } = require('../db/models');

exports.getAllCarts = async (req, res) => {
  const { id } = req.params;
  try {
    const cartsInDB = await Cart.findAll({
      where: { userId: id },
      include: [CartLine],
    });

    res.json({ message: 'success', carts: cartsInDB });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

exports.deleteCart = async (req, res) => {
  const { id } = req.params;
  try {
    await Cart.destroy({ where: { id } });
    const cartsInDB = await Cart.findAll({
      where: { userId: id },
      include: [CartLine],
    });
    res.json({ message: 'success', carts: cartsInDB });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

exports.updateCart = async (req, res) => {
  const { id } = req.params;
  try {
    await Cart.update(
      { cartStatus: true, orderStatus: 'Оформлен' },
      { where: { id } }
    );
    const cartsInDB = await Cart.findAll({
      where: { userId: id },
      include: [CartLine],
    });
    res.json({ message: 'success', carts: cartsInDB });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

exports.updateCartLine = async (req, res) => {
  const { cartline, action } = req.body;
  try {
    let newCount;
    const book = await Book.findOne({ where: { id: cartline.bookId } });
    const cart = await Cart.findOne({ where: { id: cartline.cartId } });
    let totalAmount;
    if (action == 'increase') {
      newCount = cartline.count + 1;
      totalAmount = cart.totalAmount + book.amount;
    } else {
      newCount = cartline.count - 1;
      totalAmount = cart.totalAmount - book.amount;
      if (newCount === 0) {
        await CartLine.destroy({ where: { id: cartline.id } });
        await Cart.update({ totalAmount }, { where: { id: cartline.cartId } });
        const cartsInDB = await Cart.findAll({
          where: { userId: cart.userId },
          include: [CartLine],
        });
        res.json({ message: 'success', carts: cartsInDB });
        return;
      }
    }
    await Cart.update({ totalAmount }, { where: { id: cartline.cartId } });
    await CartLine.update({ count: newCount }, { where: { id: cartline.id } });
    const cartsInDB = await Cart.findAll({
      where: { userId: cart.userId },
      include: [CartLine],
    });
    res.json({ message: 'success', carts: cartsInDB });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

exports.deleteCartLine = async (req, res) => {
  const { id } = req.params;
  try {
    const cartLine = await CartLine.findOne({ where: { id } });
    const book = await Book.findOne({ where: { id: cartLine.bookId } });
    const cart = await Cart.findOne({
      where: { userId: +res.locals.user.id, cartStatus: false },
      include: [CartLine],
    });
    await CartLine.destroy({ where: { id } });
    if (cart.CartLines.length) {
      const totalAmount = book.amount * cartLine.count;
      await Cart.update(
        { totalAmount: cart.totalAmount - totalAmount },
        { where: { id: cart.id } }
      );
    } else {
      await Cart.destroy({
        where: { userId: +res.locals.user.id, cartStatus: false },
      });
    }
    const cartsInDB = await Cart.findAll({
      where: { userId: cart.userId },
      include: [CartLine],
    });
    res.json({ message: 'success', carts: cartsInDB });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};
