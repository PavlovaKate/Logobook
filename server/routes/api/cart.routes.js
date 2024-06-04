const router = require('express').Router();
const cartController = require('../../controllers/cartController');
const { verifyAccessToken } = require('../../middleware/authMiddleware');

router.get('/:id', cartController.getAllCarts);
router.delete('/:id', cartController.deleteCart);
router.put('/cartLine/:id', cartController.updateCartLine);
router.delete('/cartLine/:id', cartController.deleteCartLine);

module.exports = router;
