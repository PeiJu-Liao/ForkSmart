// TODO:　處理認證的中介軟體(passsport)
const passport = require('passport')
// NOTE: 透過"本地認證"的機制[藉由使用者姓名/信箱在node.js的環境裡完成認證]
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')
const forkSmartUser = require('../models/User')

// NOTE: Syntax: new LocalStratefy({/* options */}, callback)

const passportCheck = function () {
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  }, function (req, email, password, done) {
    forkSmartUser.findOne({ email })

      .then(user => {

        // NOTE: 狀況一: 伺服回傳錯誤(資料庫資料抓取失敗等原因)
        if (error) { return done(error) }
        // NOTE: 狀況二: 若找毋該使用者資料，則不提供有關密碼的資訊
        if (!user) { //這邊的false是指驗證失敗(帳號/密碼不符)
          return done(null, false, req.flash("warning_msg", "該信箱或密碼已經註冊。"))
        }
        // NOTE: 狀況三: 使用者名稱正確，但密碼錯誤(此處需用bcrypt加密模組做確認)
        bcrypt.compare(password, user.password, function (err, result) {
          if (err) throw done(err)
          if (result) {
            //若帳密皆正確，提供password使用者資料
            return done(null, user)
          } else {
            return done(null, false, req.flash("warning_msg", "您輸入的密碼有誤，請再次確認。"))
          }
        })

      })
  }
  ))

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    forkSmartUser.findById(id, function (err, user) {
      done(err, user);
    });
  });
}

module.exports = passportCheck

