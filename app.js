const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const exphbs = require('express-handlebars')
const routes = require('./routes')
const path = require('path')
const flash = require('connect-flash')
require('./config/data')

// Template Engine Setting
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
// Static File
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
// flash 
app.use(flash())


// 載入路由
app.use(routes)



// Listen
app.listen(PORT, () => {
  console.log(`The website is loading on PORT:${PORT}`);
})