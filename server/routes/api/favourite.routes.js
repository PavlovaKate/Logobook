const router = require('express').Router();
const favouriteController = require('../../controllers/favouriteController');

router.put('/:id', favouriteController.updateFavourite)

module.exports = router;
