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


app.listen(3000, function(){
    console.log('Example app listening on port 3000!');
});

