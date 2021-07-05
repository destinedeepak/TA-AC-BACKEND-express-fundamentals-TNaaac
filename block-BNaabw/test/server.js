const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

var app = express();

app.use(logger('dev'));

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send('Welocme');
});

app.get('/users.html', (req, res) => {
  res.send('users page');
});

app.get('/index.html', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/about.html', (req, res) => {
  res.sendFile(__dirname + '/about.html');
});

// app.get();

app.use((req, res, next) => {
  res.status(404).send('Page not found');
});

app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(4000, () => {
  console.log('Server is listening at 4k');
});
