const express = require('express');
const app= express();
//建立一個Express伺服器

app.get('/', function (req, res) {
  res.send('Hello !')
});//主頁輸出 "Hello"


app.get('/test', function (req, res) {
  res.send('test');
});
//Route 的部分

app.get('/about/:name/:nickname', function(req, res) {
    console.log(req.params)
    res.send(req.params.name);
});//處理 Request 資料 GET /about/tom/tommy


app.use(express.bodyParser()); 

app.post('/', function(req, res){
    console.log(request.body);
    res.send(req.body.name);
});//POST, bodyParser是node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。

app.listen(3000,function(){
  console.log (' app is running on port 3000!');});

