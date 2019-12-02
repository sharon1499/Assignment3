var http = require('http');
var path = require('path');
const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
const fetch = require('node-fetch');


app.set('views', path.join(__dirname, 'views'));
app.set("view engine", 'ejs');
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ encoded: false}));

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
     cTitle = data.title;
     year = data.year;
    image = data.img;
     

    

});

    res.render('index',{title: cTitle, year: year, image: image});
});
app.get('/randomComic', function(req, res)
{
   //getComic(false);
   res.render('index',{title:cTitle, year:year, image:image});
});
function getComic(something){
    var comic = 'https://xkcd.com/info.0.json';
    //var randNum = rand(1,2208);
    var randComic = 'http://xkcd.com/'+ rand(1,2208) + '/info.0.json';
    fetch(something ? comic : randComic)
        .then(res => res.json())
        .then(json =>{
            cTitle = json.title;
            year = json.year;
            image = json.img;
            //console.log(json);
        });
}
http.createServer(app).listen(port, function()
{

});