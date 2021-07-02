const express = require('express');

var app = express();

app.get('/',(req,res)=>{
    res.send("Welcome to nodejs")
})

app.listen(3000, ()=>{
    console.log('Server is listening at 3k');
})