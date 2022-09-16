const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const exphbs = require('express-handlebars')
const routes = require('./routes')
const flash = require('connect-flash')
const session = require('express-session')
const passport = require('passport')
require('./config/data')
require('./config/passport')(passport)

// Template Engine Setting
const hbs = exphbs.create({
  defaultLayout: 'main',
  // create custom helpers
  helpers: {
    check_status: function (val1, val2) {
      return val2.includes(val1)
    }
  }
})
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

// Static File
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

// express-session middleware
app.use(session({
  secret: 'member secret',
  resave: true,
  saveUninitialized: true,
  // cookie: { secure: true }
}))

// passport middleware loading
app.use(passport.initialize());
app.use(passport.session());

// flash 
app.use(flash())
// setting local variable so we can use it anywhere in app
app.use((req, res, next) => {
  res.locals.isAuthenticated = req.isAuthenticated()
  res.locals.success_msg = req.flash('success_msg')
  res.locals.warning_msg = req.flash('warning_msg')
  next()
})

// 載入路由
app.use(routes)

// Listen
app.listen(PORT, () => {
  console.log(`The website is loading on PORT:${PORT}`);
})