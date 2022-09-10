const express = require('express')
const router = express.Router()
// json file loading
const forksmartData = require('../../forksmart.json')
const pagination = {}

router.get('/', paginationControl(forksmartData.results), (req, res) => {

  res.render('food', {
    forksmartData: pagination.results,
    isResultExist: true,
  })
})

router.get('/search', paginationControl(forksmartData.results), (req, res) => {
  const keyword = req.query.keyword.trim() || ""
  console.log(`req.query:`, req.query)
  const researchResults = forksmartData.results.filter(item => {
    return item.name_en.toLowerCase().includes(keyword.toLowerCase()) || item.name.trim().includes(keyword) || item.category.trim().includes(keyword)
  })

  // FIXME: 之後分頁功能要修改(CodeShit)
  if (keyword === "") {
    res.redirect('/foods?page=1&limit=8')
  }

  res.render('food', {
    forksmartData: researchResults,
    isResultExist: researchResults.length,
    keyword
  })
})

router.get('/search1', (req, res) => {
  const category = req.query.category
  const sortResults = forksmartData.results.filter(item => {
    return item.category.trim() === category
  })

  res.render('food', {
    forksmartData: sortResults,
    isResultExist: true,
    category
  })
})

router.get('/search2', (req, res) => {
  const keyword = req.query.keyword.trim()
  const researchResults = forksmartData.results.filter(item => {
    return item.name_en.toLowerCase().includes(keyword.toLowerCase()) || item.name.trim().includes(keyword) || item.category.trim().includes(keyword)
  })

  if (keyword === "") {
    res.redirect('/foods?page=1&limit=8')
  }

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

function paginationControl(model) {
  return (req, res, next) => {
    // TODO: 分頁功能: http://localhost:3000/foods?page=1&limit=12
    const page = parseInt(req.query.page) //turn it to Integer Number
    const limit = parseInt(req.query.limit)
    const startIndex = (page - 1) * limit
    const endIndex = (page) * limit
    // slice()回傳一個新陣列


    if (endIndex < model.length) {
      pagination.next = {
        page: page + 1,
        limit,
      }
    }
    // NOTE: 表示"並非"從第一頁開始
    if (startIndex > 0) {
      pagination.prev = {
        page: page - 1,
        limit
      }
    }
    pagination.results = model.slice(startIndex,
      endIndex)
    next()
  }
}

module.exports = router