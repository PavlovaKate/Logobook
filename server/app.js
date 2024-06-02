const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT;
const routes = require('./routes/index.routes');
const serverConfig = require('./config/serverConfig');

serverConfig(app);

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
