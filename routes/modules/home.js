const express = require('express')
const router = express.Router()
const forksmartData = require('../../forksmart.json')
const Bodytest = require('../../models/Test')
const { ensureAuthenticated } = require('../../config/auth');

// Route
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Fork Smart',
    forksmartData: forksmartData.results,
  });
})

router.get('/diary', ensureAuthenticated, (req, res) => {

  // 利用find(這裡放的參數是抓取條件，若沒填及表示抓取全部的數據)
  Bodytest.find()
    //lean()把Mongoose的Model物件轉換成乾淨的JS資料陣列
    .lean()
    .then(test => {
      // const date = moment(test.date).format('YYYY-MM-DD')
      res.render('diary', {
        test,
        title: "ForkSmart",
        name: req.user.name,
        email: req.user.email,
      })
    })
    .catch(error => console.log(error))
})

module.exports = router