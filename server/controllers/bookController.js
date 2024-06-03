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
} = require('../db/models');

exports.getAllBooks = async (req, res) => {
  try {
    const booksInDB = await Book.findAll({
      include: [
        { model: TagLine, include: [Tag] },
        { model: RateLine, include: [Rate] },
        { model: Review, include: [Image] },
        { model: ShopLine, include: [Shop] },
        Favourite,
      ],
    });

    const authors = await Author.findAll();
    const categories = await Category.findAll();
    const publishers = await Publisher.findAll();

    const books = booksInDB.map(({ dataValues }) => {
      const author = authors.find((el) => el.id === dataValues.authorId);
      const category = categories.find((el) => el.id === dataValues.categoryId);
      const publisher = publishers.find((el) => el.id === dataValues.publisherId);
      return { ...dataValues, author: author.name, category: category.name, publisher: publisher.name };
    });

    res.json({ message: 'success', books });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

// review, rate, author, category, tag, publisher

// exports.getPlaceById = async (req, res) => {
//   try {
//     const place = await prisma.place.findUnique({
//       where: { id: +req.params.id },
//     });
//     if (!place) {
//       return res.status(404).json({ message: 'Такого места нет' });
//     }
//     res.status(200).json({ message: 'success', place });
//   } catch ({ message }) {
//     res.status(500).json({ message });
//   }
// };

// exports.createPlace = async (req, res) => {
//   const { name, description, latitude, longitude } = req.body;
//   try {
//     const a = parseFloat(latitude);
//     const b = parseFloat(longitude);
//     const place = await prisma.place.create({
//       data: { name, description, latitude: a, longitude: b },
//     });
//     res.status(201).json({ message: 'success', place });
//   } catch ({ message }) {
//     res.status(400).json({ message });
//   }
// };

// exports.updatePlace = async (req, res) => {
//   const { name, description, latitude, longitude } = req.body;
//   try {
//     const placeInDb = await prisma.place.findUnique({
//       where: { id: +req.params.id },
//     });
//     if (!placeInDb) {
//       return res.status(404).json({ message: 'Место не найдено' });
//     }

//     const place = await prisma.place.update({
//       where: { id: placeInDb.id },
//       data: {
//         name: name || placeInDb.name,
//         description: description || placeInDb.description,
//         latitude: parseFloat(latitude) || placeInDb.latitude,
//         longitude: parseFloat(longitude) || placeInDb.longitude,
//       },
//     });
//     res.json({ message: 'success', place });
//   } catch ({ message }) {
//     res.status(500).json({ message });
//   }
// };

// exports.deletePlace = async (req, res) => {
//   try {
//     const place = await prisma.place.findUnique({
//       where: { id: parseInt(req.params.id) },
//     });
//     if (!place) {
//       return res.status(404).json({ message: 'Место не найдено' });
//     }
//     await prisma.place.delete({ where: { id: parseInt(req.params.id) } });
//     res.status(200).json({ message: 'success' });
//   } catch ({ message }) {
//     res.status(500).json({ message });
//   }
// };
