/**
 * Created by Nick on 11/2/2016.
 */
var express = require('express');
var app = express();
var dotoController = require('./controller/todocontroller');

//ser templ eng
app.set('view engine', 'ejs');

//static file

app.use(express.static('./public'));

//fire controllers
dotoController(app);

app.listen(300);
console.log('you are listenig to port num 3000');


