// controllers/userController.js
const bcrypt = require('bcrypt');
const { User } = require('../db/models');
const generateTokens = require('../utils/authUtils');
const cookiesConfig = require('../config/cookiesConfig');

exports.createUser = async (req, res) => {
  const { name, email, password, tgUsername } = req.body;

  try {
    const userInDb = await User.findOne({ where: { email } });
    if (userInDb) {
      return res.status(400).json({ message: 'Пользователь с таким email уже существует' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const userWithPass = await User.create({
      name,
      email,
      password: hashedPassword,
      isAdmin: false,
      image: '',
      tgUsername,
    });

    const user = await User.findOne({
      where: { id: userWithPass.id },
      attributes: ['id', 'name', 'email', 'tgUsername'],
    });

    const { accessToken, refreshToken } = generateTokens({ user });

    res.status(201).cookie('refreshToken', refreshToken, cookiesConfig).json({ message: 'success', user, accessToken });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'Пользователь не найден' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Неверный пароль или email' });
    }

    delete user.password;
    const { accessToken, refreshToken } = generateTokens({ user });
    console.log(accessToken, refreshToken);
    return res
      .cookie('refreshToken', refreshToken, cookiesConfig)
      .status(200)
      .json({ message: 'success', accessToken, user });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

exports.logoutUser = (req, res) => {
  res.locals.user = undefined;
  res.clearCookie('refreshToken').json({ message: 'success' });
};

exports.checkUser = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { id: res.locals.user.id },
    });
    res.status(200).json({ message: 'success', user });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

exports.loadUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json({ message: 'success', users });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { name, email, tgUsername } = req.body;
    const { id } = req.params;
    const newImg = `/img/${req.file.filename}`;

    await User.update({ name, email, tgUsername, image: newImg }, { where: { id } });
    const user = await User.findOne({ where: { id } });

    const { accessToken, refreshToken } = generateTokens({ user });

    res.status(201).cookie('refreshToken', refreshToken, cookiesConfig).json({ message: 'success', user });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};
