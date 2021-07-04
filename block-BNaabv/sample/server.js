const express = require('express');
const morgan = require('morgan');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

var app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(logger('dev'));

app.use(cookieParser());

app.use((req, res, next) => {
  res.cookie('username', 'Deepakj');
  next();
});

app.get('/', (req, res) => {
  res.send(`<h2>Welcome to express</h2>`);
});

app.get('/about', (req, res) => {
  res.send('My name is Deepak');
});

app.post('/form', (req, res) => {
  res.json(req.body);
});

app.post('/json', (req, res) => {
  res.format({
    'text/plain': () => res.send(req.body),
  });
});

app.get('/users/:username', (req, res) => {
  res.format({
    'text/html': () => res.send(`<h2>${req.params.username}</h2>`),
  });
});

app.use('/admin', (req,res, next) => {
    next('unathorized admin');
})

app.use((err, req, res, next) => {
    res.send(err);
})

app.use((req, res, next) => {
    res.status(404).send('page not found')
})

app.listen(3000, () => {
  console.log('Server is listening at 3k');
});
