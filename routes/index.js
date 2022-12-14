const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const user = require('./modules/user')
const foods = require('./modules/foods')
const bodytest = require('./modules/bodytest')
const { ensureAuthenticated } = require('../config/auth');


// TODO: 首頁
router.use('/', home)
// TODO: 會員登入/註冊
router.use('/user', user)
// TODO: 食物瀏覽頁 / 食物營養介紹
router.use('/foods', foods)
// TODO: 健康體態檢測頁面
router.use('/bodytest', ensureAuthenticated, bodytest)

module.exports = router