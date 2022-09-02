const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('bodytest')
})

router.get('/result', (req, res) => {
  res.send(`This is body test result page.`)
})

module.exports = router