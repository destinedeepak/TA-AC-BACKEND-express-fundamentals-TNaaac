const express = require('express');
const logger = require('./logger');
const jsonParser = require('./jsonParser');

var app = express();

app.use(logger);

app.use(jsonParser);

app.get('/', (req, res) => {
  setTimeout(() => {
    console.log(req.body, 'req.body2');
    res.send('welcome');
  }, 0);
});

app.listen(4000, () => {
  console.log('Server is listening at 4k');
});
