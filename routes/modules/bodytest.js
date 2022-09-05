const express = require('express')
const router = express.Router()
const Bodytest = require('../../models/Test')

router.get('/', (req, res) => {
  res.render('bodytest')
})

// 新增一筆bodytest紀錄 
router.post('/tests', (req, res) => {
  const body = req.body
  console.log(body)
  return Bodytest.create(body)
    .then(() => {
      res.redirect('/diary')
    })
    .catch(error => console.log(error))
})

module.exports = router