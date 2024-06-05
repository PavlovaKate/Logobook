const router = require('express').Router();

const userRoutes = require('./api/user.routes');
const tokenRoutes = require('./api/token.routes');
const booksRoutes = require('./api/book.routes');
const cartsRoutes = require('./api/cart.routes');
const reviewRoutes = require('./api/review.routes');
const favouritesRoutes = require('./api/favourite.routes');
const { verifyAccessToken } = require('../middleware/authMiddleware');

router.use('/tokens', tokenRoutes);
router.use('/users', userRoutes);
router.use('/books', booksRoutes);
router.use('/carts',verifyAccessToken, cartsRoutes);
router.use('/review', reviewRoutes);
router.use('/favourites', verifyAccessToken, favouritesRoutes);

module.exports = router;
