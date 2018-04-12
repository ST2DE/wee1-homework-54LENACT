var express = require('express');
var app = express();
var http = require('http');

app.use(express.static(__dirname+'/views'));
app.set('view engine','ejs' );

app.get('/about',function(req,res){
   var user = {name: 'Tom'};
  res.render('index',{name:req.query.name});
  
});

app.get('/name/:name', function(req, res){
   var user = {name: 'Tom'};
  res.send(req.parms.name);
  

});
app.listen(3000,function(){
  console.log('Running on port 3000!');
});