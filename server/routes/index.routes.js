const router = require('express').Router();

const userRoutes = require('./api/user.routes');
const tokenRoutes = require('./api/token.routes');
const booksRoutes = require('./api/book.routes');
const cartsRoutes = require('./api/cart.routes');

router.use('/tokens', tokenRoutes);
router.use('/users', userRoutes);
router.use('/books', booksRoutes);
router.use('/carts', cartsRoutes);

module.exports = router;
