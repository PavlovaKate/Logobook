const router = require('express').Router();
const bookController = require('../../controllers/bookController');
const { verifyAccessToken } = require('../../middleware/authMiddleware');

router.get('/', bookController.getAllBooks)
router.post('/addToCart/:id', verifyAccessToken, bookController.addToCart)
router.put('/addRate/:id', verifyAccessToken, bookController.addRate)

module.exports = router;
