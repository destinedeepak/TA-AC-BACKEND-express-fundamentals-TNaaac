const express = require('express');

var app = express();

app.use('/',(req, res, next)=>{
    console.log(req.url, req.method)
    next();
})

app.get('/',(req, res)=>{
    res.send('Welcome');
})

app.listen(3000, ()=>{
    console.log('Server is listening at 3k');
})