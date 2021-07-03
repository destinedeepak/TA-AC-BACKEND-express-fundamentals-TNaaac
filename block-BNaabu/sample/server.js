const express = require('express');

var app = express();

app.use('/admin', (req, res, next) => {
    next("unauthorized page")
})

app.get('/', (req,res) => {
    res.send('Welcome');
})

app.use('/about', (req, res, next) => {
    res.send('About Page')
})

app.use((req, res, next) => {
    res.send('Page not found')
})

app.use((err, req, res, next) => {
    res.send(err);
})

app.listen(3000);