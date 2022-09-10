# ForkSmart
受到全球疫情影響，國民"健康"意識逐漸抬頭，但卻缺乏健康飲食的知識作為網站發想。

## 專案安裝流程-Installation
1. 開啟終端機terminal，將專案複製到本機
<pre><code>https://github.com/PeiJu-Liao/ForkSmart.git</code> </pre>
2. 初始-切至專案資料夾並安裝套件
<pre><code>cd ForkSmart</code> </pre> 
<pre><code>npm install</code> </pre>
3. 倘若您尚未下載nodemon，則須安裝nodemon套件
<pre><code>npm install -g nodemon</code> </pre>
4. 請設定env.example內的空白環境變數設定，並將檔名改成.env
<pre><code>MONGODB_KEY = "Your connection string" </code> </pre>
5. 設定完環境變數，即可啟動伺服器，執行app.js檔案
<pre><code>npm run dev</code> </pre>
6. 當終端機上出現以下字樣，表示伺服器與資料庫已啟動並成功連結。
<pre><code>
Does the dotenv work: YES.
The website is loading on PORT:3000
MongoDB connected
</code> </pre>
7. 現在你可以開啟任一瀏覽器輸入http://localhost:3000 開始使用ForkSmart網站了!

## 功能列表-Features
- 依照食物的中英文名稱及食物類別搜尋
- 可檢視食物的營養資訊 (包含食物類別/營養資訊/盛產季..)
- 可輸入身高體重，檢測自身BMI值
- 可記錄每日的身心日記
- 可透過隱性飢餓檢視自身缺乏的營養價值

## 環境建置-Environment Setup
* node.js@14.19.3 -執行環境
* express@4.18.1 -框架
* express-handlebars -樣板引擎
* mongoose@6.5.2 -資料庫
* bootstrap@5.2.0 -前端框架
* passport@0.6.0 -驗證 
<br>
剩餘工具套件可詳見package.json檔案...

## 專案開發人員-Contributor
> [PeiJu Liao](https://github.com/PeiJu-Liao)
