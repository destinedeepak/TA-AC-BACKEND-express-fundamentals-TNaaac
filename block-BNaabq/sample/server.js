const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

var app = express();

app.use(cookieParser());

app.use(logger('dev'))

app.use((req, res, next)=>{
    var username = req.cookies.username;
    if(username){
        console.log(username)
    }
    res.cookie('username', 'Deepak');
    next()
})

app.get('/about', (req, res)=>{
    res.send('Welcome');
})

app.listen(4000, (req, res)=> {
    console.log('Server is listening at 4k');
})