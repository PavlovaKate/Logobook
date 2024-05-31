const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const routes = require('./routes/index.routes');
const serverConfig = require('./config/serverConfig');

serverConfig(app);

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
