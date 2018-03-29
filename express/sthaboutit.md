> what is express:

Express是一個基於Node.js平台的極簡、靈活的web應用開發框架，它提供一系列強大的特性，幫助你創建各種Web和移動設備應用。
基於Node.js，Node.js對文件、字符串、流等操作都封裝了一套API，Express不是在這些API基礎之上進一步封裝。只是在它基礎之上擴展了開發web應用所需要的基本功能。

>>中間件很重要？（這是什麼啊

在Express中，中間件又可分為內置中間件，自定義中間件，第三方中間件。有關內置中間件就一個static，有關自定義中間件你需要知道自定義的參數Function函數怎麼處理。有關第三方中間件需要先安裝，在使用，每一個第三方中間件都有一個特定的用途。

eg.express.static 是用來處理靜態文件（靜態文件是什麼？
>>在 Express 中提供靜態檔案

如果要提供影像、CSS 檔案和 JavaScript 檔案等之類的靜態檔案，請使用 Express 中的 express.static 內建中介軟體函數。
將含有靜態資產的目錄名稱傳遞給 express.static 中介軟體函數，就能直接開始提供檔案。舉例來說，使用下列程式碼在名稱是 public 的目錄中，提供影像、CSS 檔案和 JavaScript 檔案：
app.use(express.static('public'));


>特別的規則：

>>Router 規則重複時，總是執行先定義的規則

當訪問任何被這兩條同樣的規則匹配到的路徑時，總是會先執行前一條規則，後面的會被忽略，原因是 Express 在處理 Router 規則時，會優先處理先定義的規則，因此後面相同的規則被忽略。

>>Router 控制權轉移 - next()

Express 提供了 Router 控制權轉移的方法，即 callback 的第三個參數 next，透過next()，可將控制權轉移給後面的規則。

>>使用模板引擎 / 樣板引擎 (Template Engine)

指定頁面模板位置，在 views 子目錄下。

app.set('views', path.join(__dirname, 'views'));
表明要使用的模板引擎是 ejs。

app.set('view engine', 'ejs');
res.render是使用模板引擎的語法，並將其產生的頁面直接返回给 client 端。

res.render( 'index', {
  title : 'To-Do List'
});
它接受兩個參數，第一個是樣板名稱（不含附檔名），第二個是傳遞給樣板的資料，帶到畫面上。下面的 title 都會被「To-Do List」所替換掉。

//<h1><%= title %></h1>//
//<p>Welcome to <%= title %></p>//
而 ejs 的語法有三種：

//<% code %>：JavaScript 程式碼。
<%= code %>：顯示替換過 HTML 特殊字符的内容。
<%- code %>：顯示原始 HTML 内容。//
