const { urlencoded } = require('express');
const express = require('express');

var app = express();

app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.sendFile(__dirname  + '/index.html');
})

app.get('/new', (req, res) => {
    res.sendFile(__dirname + '/form.html');
})

app.post('/new', (req, res) => {
    res.send(req.body);
})

app.get('/users/:username', (req,res) => {
    let username = req.params.username ;
    res.send(username);
})

app.listen(3000, () => {
    console.log('Server is listening at 3000');
})