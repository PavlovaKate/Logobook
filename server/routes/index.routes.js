const router = require('express').Router();

const userRoutes = require('./api/user.routes');
const tokenRoutes = require('./api/token.routes');

router.use('/tokens', tokenRoutes);
router.use('/users', userRoutes);

module.exports = router;
