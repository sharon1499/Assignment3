var http = require('http');
var path = require('path');
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var port = process.env.PORT || 3000;
const fetch = require('node-fetch');


app.set('views', path.join(__dirname, 'views'));
app.set("view engine", 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ encoded: true}));

// var task = ["bark", "meow"];
// var complete = ["eat", "sleep"];

app.get('/', function(req, res)
{
    res.render("index");
});
app.get('/random', function(req, res)
{
    res.render("index");
});
function randomC(random){
    fetch('https://xkcd.com/info.0.json')
    .then(res => res.json())
    .then(body =>
    echo ($response["title"],
    echo ($response["year"],
    echo ($response["img"],
    console.log(body)))));
}
http.createServer(app).listen(port, function()
{

});