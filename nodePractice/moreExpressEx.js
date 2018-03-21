var express = require('express');
var app = express();




app.get('/', function(req, res) {
    res.send('Hello Worlddd!');

});

app.get('/cats', function(req, res){
    res.send('Meow');
})

app.get('/dogs', function(req, res){
    res.send('Woof');
})

app.get('/cats_and_dogs', function(req, res){
    res.send("living together");
})




app.get('/hello/:name/:born', function(req, res){
    var name = req.params.name || 'world';
    var yearborn = req.params.born || 2018;
    var d = new Date();
    var n = d.getFullYear();
    var age = (n - yearborn);
    console.log(age);
    res.send('Hello ' + name + "! You were born in" + age);

});



app.listen(3000, function(){
    console.log('Example app listening on port 3000!');
});

