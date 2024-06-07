const generateTokens = require('../utils/authUtils');
const cookiesConfig = require('../config/cookiesConfig');
exports.tokenRefresh = (req, res) => {
  const { accessToken, refreshToken } = generateTokens({
    user: res.locals.user,
  });
  res
    .cookie('refreshToken', refreshToken, cookiesConfig)
    .status(200)
    .json({ message: 'success', accessToken, user: res.locals.user });
};
