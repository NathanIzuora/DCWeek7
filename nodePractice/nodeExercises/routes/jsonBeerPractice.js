var express = require ('express');

var myData = require('./dataBeer.json');
var app = express();



app.get('/name', function(req, res){
    var theInfoBiz = "";

    myData.restaurants.forEach(function(detail){
        theInfoBiz += `
        <li>
        <h1>${detail.name}</h1>
        <h2>${detail.status}</h2>
        <p>${detail.phone}</p> 
        </li>`;

     });

     res.send(
         `
         ${theInfoBiz};

            `
     );

        
    });

app.listen(3004,function(){
    console.log("working");


})

