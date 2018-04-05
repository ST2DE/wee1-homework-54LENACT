const express = require('express');//宣告 express這個變數&載入 express 函式庫
const app= express();
//宣告 app 變數為 express function,建立一個Express伺服器

app.get('/', function (req, res) {
  res.send('Hello !')
});//主頁輸出 "Hello"


app.get('/test', function (req, res) {
  res.send('test'); //接收連線請求、並回應客戶端
});
//Route 的部分

app.get('/about/:name/:nickname', function(req, res) {
    console.log(req.params)
    res.send(req.params.name+'你好');
});//處理 Request 資料 GET /about/tom/tommy


app.use(express.bodyParser()); 

app.post('/', function(req, res){
    console.log(request.body);
    res.send(req.body.name);
});//POST, bodyParser是node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。

app.listen(3000,function(){
  console.log (' app is running on port 3000!');});//告訴server聽取3000這個Port

