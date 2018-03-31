>GIT是分散式版本控制系統
<li>版本控制系統 (Version Control System, VCS)是一套能記錄所有修改版本、讓使用者能隨時取回特定版本的系統。</li>


&nbsp &nbsp &nbsp 版本控制系統的基本名詞：

&nbsp &nbsp &nbsp <li>#1 Repository (數據庫/版本儲存庫)
用來保存歷史程式碼，和所有跑這個專案需要的東西，包括所有原始碼、範例設計檔、文件等等。
</li>
&nbsp &nbsp &nbsp <li> #2 Local (本地端)
通常是個人開發的電腦/機台。</li>

&nbsp &nbsp &nbsp <li> #3 Remote (遠端)
通常是一個共用的伺服器。</li>

# Git的提交流程：
  1 修改完但還沒提交的檔案為Modified
  2 藉由git add指令進入Staging Area暫存起來 (暫存區
  3 藉由git commit指令確定將這個檔案版本存入Repository (版本庫,成功儲存
  

<ul>
<b>常用命令列指令</b>
<li>touch         建立檔案</li>

<li>mkdir         建立資料夾、目錄</li>

<li> git add .     新增的檔案加入到 Git 版本控管</li>

<li> git status    查詢當前工作目錄的詳細狀態 </li>

<li>git help add  查詢完整的文件</li>

<li>git commit -m "版本紀錄的說明文字"</li>

<li>git log       查詢版本的歷史紀錄</li>

<li>git log -10   可以透過以下指令限制輸出的版本數量，以一個 ( - ) 與一個數字，可以限定輸出最近幾筆紀錄
</li>
<li>git rm '要刪除的檔案名'</li>

<li>git mv 檔案名 要改的檔案名  變更檔案或目錄的名稱</li>
</ul>

