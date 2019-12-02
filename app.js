var http = require('http');
var path = require('path');
const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const fetch = require('node-fetch');
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", 'ejs');
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({encoded: false}));


// var task = ["bark", "meow"];
// var complete = ["eat", "sleep"];

//var url = 'https://xkcd.com/info.0.json';
var cTitle = '';
var year = '';
var image = '';



app.get('/', function(req, res)
{
    // res.render("index");
    fetch('https://xkcd.com/info.0.json')
    .then(res => res.json())
     .then(data => {
         year = data.year;
        cTitle = data.title;
        image = data.img;
        });
    res.render('index',{ctitle: cTitle, year: year, image: image});
});

app.get('/randomComic', function(req, res)
{
   fetch('http://xkcd.com/'+Math.floor((Math.random() * 2220) + 1)+'/info.0.json')
   .then(res => res.json())
   .then(data => {
        year = data.year;
        cTitle = data.title;
        image = data.img;
});
    res.render('index2',{ctitle: cTitle, year: year, image: image});
});

http.createServer(app).listen(port, function()
{

});