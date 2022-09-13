const express = require('express')
const router = express.Router()
const Bodytest = require('../../models/Test')
const hungrySympton = require('../../bodytest.json').sympton

router.get('/', (req, res) => {
  res.render('bodytest', {
    title: 'ForkSmart',
    hungrySympton: hungrySympton,
    login: true,
  })
})

router.post('/tests', (req, res) => {
  const { gender, weight, height, age, moodrecord, mood, sympton } = req.body
  console.log(req.body)
  return Bodytest.create({
    gender, weight, height, age, moodrecord, mood, sympton
  })
    .then(() => { res.redirect('/diary') })
    .catch(error => console.log(error))
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  return Bodytest.findById(id)
    .lean()
    .then(test => {
      const symptonData = test.sympton
      let nutrition = {}
      symptonData.forEach(item => {
        hungrySympton.forEach(hungryItem => {
          if (item === hungryItem.sympton) {
            return nutrition[item] = hungryItem.nutrition
          }
        })
      })
      const keyValueNutrition = Object.entries(nutrition)
      res.render('bodyResult', {
        title: 'ForkSmart',
        keyValueNutrition,
        test
      })
    })
    .catch(error => console.log(error))
})

module.exports = router