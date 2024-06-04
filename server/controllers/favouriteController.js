const router = require('express').Router();
const { Book, Favourite } = require('../db/models');

exports.updateFavourite = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findOne({
      where: { id },
      include: [Favourite],
    });
    const currentFav = book.Favourites.find((fav) => fav.userId === +res.locals.user.id && fav.bookId === +id);
    let favourite = currentFav;
    if(currentFav){
      await Favourite.destroy({where: {id: currentFav.id}})
      res.json({ message: 'destroy', favourite });
      return 
    }else {
      favourite = await Favourite.create({ userId: res.locals.user.id, bookId: id});
      res.json({ message: 'create', favourite });
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};