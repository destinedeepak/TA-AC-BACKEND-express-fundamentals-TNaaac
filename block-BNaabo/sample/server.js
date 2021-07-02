const express = require('express');

var app = express();

app.use(express.json());

app.use(express.urlencoded({extended:false}))

app.use(express.static(__dirname + '/public'));

app.post('/json', (req, res) =>{
    console.log(req.body);
})

app.post('/contact', (req, res)=> {
    console.log(req.body);
})

app.get('/index',(req, res)=>{
    res.sendFile(__dirname + '/index.html');
})

app.listen(3000, ()=>{
    console.log("Server is listening at 3000");
})