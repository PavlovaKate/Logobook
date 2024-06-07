const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');

const serverConfig = (app) => {
  app.use(express.static(path.join(__dirname, '..', 'public')));
  app.use(cookieParser());
  app.use(express.urlencoded({ extended: 'true' }));
  app.use(express.json());
};

module.exports = serverConfig;
