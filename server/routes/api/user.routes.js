const router = require('express').Router();
const { validationResult } = require('express-validator');
const userController = require('../../controllers/userController');
const { verifyAccessToken } = require('../../middleware/authMiddleware');
const multer = require('multer');

router.post(
  '/',
  // [
  //   body('username').notEmpty().withMessage('Имя обязательно'),
  //   body('email').isEmail().withMessage('Неверный формат email'),
  //   body('password')
  //     .isLength({ min: 5 })
  //     .withMessage('Пароль должен содержать минимум 5 символов'),
  // ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  userController.createUser
);

router.post(
  '/login',
  // [
  //   body('email').isEmail().withMessage('Неверный формат email'),
  //   body('password')
  //     .isLength({ min: 5 })
  //     .withMessage('Пароль должен содержать минимум 5 символов'),
  // ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  userController.loginUser
);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/img');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router
  .get('/', verifyAccessToken, userController.checkUser)
  .get('/logout', userController.logoutUser)
  .get('/all', userController.loadUsers)
  .put(
    '/update/:id',
    verifyAccessToken,
    upload.single('image'),
    userController.updateUser
  );

module.exports = router;
