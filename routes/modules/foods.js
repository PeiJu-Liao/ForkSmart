const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('foods')
})

router.get('/:id', (req, res) => {
  res.render('show')
})

module.exports = router