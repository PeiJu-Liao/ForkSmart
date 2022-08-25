const express = require('express')
const router = express.Router()
const forkSmartUser = require('../../models/User')
const bcrypt = require('bcryptjs')
const passport = require('passport')
const { forwardAuthenticated } = require('../../config/auth');


// 登入頁面
router.get('/login', (req, res) => {
  res.render('login', {
    title: 'Fork Smart',
    layout: false
  })
})

// 註冊頁面
router.get('/register', (req, res) => {
  res.render('register', {
    title: 'Fork Smart',
    layout: false
  })
})

// Login 
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    failureRedirect: "/user/login",
    successRedirect: "/",
    failureFlash: true
  })(req, res, next);
})


// Register
router.post('/register', (req, res) => {
  const { name, email, password, password2 } = req.body
  console.log(req.body)
  let errors = []
  // NOTE: 註冊未完全填入
  if (!name || !email || !password || !password2) {
    errors.push({
      msg: "請輸入完整的資料。"
    })
  }
  // NOTE: 密碼與確認密碼不符
  if (password !== password2) {
    errors.push({
      msg: "輸入的密碼與密碼確認不符。"
    })
  }
  // NOTE: 密碼長度不夠
  if (password.length < 8) {
    errors.push({
      msg: "密碼最少需要8位字元。"
    })
  }

  // 假設只要有任一的錯誤
  if (errors.length > 0) {
    res.render('register', {
      errors, name, email, password, password2,
      layout: false
    })
    console.log(errors);
  } else {
    forkSmartUser.findOne({ email })
      .then(user => {
        if (user) {
          errors.push({
            msg: "此信箱'帳號已經註冊過。"
          })
          res.render('register', {
            errors, name, email, password, password2
          })
        } else {
          const newUser = new forkSmartUser({
            name, email, password
          })
          // NOTE: 確認使用者皆符合註冊條件時，將使用者資料存入資料庫
          // NOTE: 存入資料庫前將使用者設定之密碼"加密"
          bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(newUser.password, salt, function (err, hash) {
              if (err) throw err
              // NOTE: "hash湊密"之後存入DB
              newUser.password = hash
              newUser.save()
                .then(user => {
                  req.flash('success_msg', '您已成功註冊該帳戶。')
                  res.redirect('/user/login')
                })
                .catch(error => console.log(error))
            })
          })
        }
      })
  }


})


// Logout
router.get('/logout', (req, res) => {
  req.logout()
  req.flash('success_msg', '你已成功登出。')
  res.redirect('user/login')
})

module.exports = router