const router = require('express').Router();
const bookController = require('../../controllers/bookController');

router.get('/', bookController.getAllBooks);
// .post('/review', bookController.createPlace);

// router.put('/:id', bookController.updatePlace).delete('/:id', bookController.deletePlace);

module.exports = router;
