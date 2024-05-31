const router = require('express').Router();
const tokenController = require('../../controllers/tokenController');
const { verifyRefreshToken } = require('../../middleware/authMiddleware');

router.get('/refresh', verifyRefreshToken, tokenController.tokenRefresh);

module.exports = router;
