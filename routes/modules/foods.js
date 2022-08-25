const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('food')
})

router.get('/:id', (req, res) => {
  res.render('show')
})

module.exports = router