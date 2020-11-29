var express = require('express');
var app = express();
var myRouter = require('./myrouter.js');
app.use('/base', myRouter);
app.listen(3000, function ServerListener() {
    console.log('Router App');
});