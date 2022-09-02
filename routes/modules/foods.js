const express = require('express')
const router = express.Router()
// json file loading
const forksmartData = require('../../forksmart.json')

router.get('/', (req, res) => {
  res.render('food', {
    forksmartData: forksmartData.results
  })
})

router.get('/:id', (req, res) => {
  // find()只會回傳第一次為true的值
  const forksmartFood = forksmartData.results.find(item => {
    return item.id.toString() === req.params.id
  })
  res.render('show', {
    forksmartFood,
    vitamin: forksmartData.vitamin
  })
})

module.exports = router