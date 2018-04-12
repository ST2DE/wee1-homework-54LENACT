var express = require('express');
var app = express();
var http = require('http');

app.use(express.static(__dirname+'/views'));
app.set('view engine','ejs' );

app.get('/about',function(req,res){
  console.log(req.query);
  res.render('index',{name:req.query.name});
  
});

app.get('/about/:name/:nickname', function(req, res) {
    console.log(req.params)
    res.send(req.params.name);
});

app.get('/template', function(req, res){
    var user = {name: 'Tom'}
    res.render('index', {user: user});
    // 不用寫 views/index.ejs 因為 express 預設 template會放在 views 資料夾裡面
});


app.listen(3000,function(){
  console.log('Running on port 3000!');
});