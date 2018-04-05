const express = require('express');//宣告 express這個變數&載入 express 函式庫
const app= express();
var http =require ('http');

app.use(express.static(__dirname+'/views'));
app.set('view engine','ejs');


app.get('/', function (req, res) {
  res.send('Hello !');
  res.render('index');
});

app.get('/test', function (req, res) {
  res.send('test'); //接收連線請求、並回應客戶端
});

app.get('/about/:name/:nickname', function(req, res) {
    console.log(req.params);
    res.send(req.params.name + '你好');
});

app.use(express.bodyParser());

app.post('/', function(req, res){
    console.log(request.body);
    res.send(req.body.name);
});

app.listen(3000,function(){
  console.log ('Running on port 3000!');});
