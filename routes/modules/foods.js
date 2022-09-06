const express = require('express')
const router = express.Router()
// json file loading
const forksmartData = require('../../forksmart.json')

router.get('/', (req, res) => {
  // TODO: 分頁功能: http://localhost:3000/foods?page=1&limit=12
  res.render('food', {
    forksmartData: forksmartData.results,
    isResultExist: true,
  })
})

router.get('/search', (req, res) => {
  const keyword = req.query.keyword.trim()
  console.log(`req.query:`, req.query)
  const researchResults = forksmartData.results.filter(item => {
    return item.name_en.toLowerCase().includes(keyword.toLowerCase())
  })
  res.render('food', {
    forksmartData: researchResults,
    isResultExist: researchResults.length,
    keyword
  })
})

router.get('/:id', (req, res) => {
  // find()只會回傳第一次為true的值
  const forksmartFood = forksmartData.results.find(item => {
    return item.id.toString() === req.params.id
  })
  res.render('show', {
    forksmartFood,
    vitamin: forksmartData.vitamin,
    mineral: forksmartData.mineral
  })
})

module.exports = router