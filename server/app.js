const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

serverConfig(app);

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
