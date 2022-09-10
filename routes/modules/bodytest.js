const express = require('express')
const router = express.Router()
const Bodytest = require('../../models/Test')
const hungrySympton = require('../../bodytest.json')

router.get('/', (req, res) => {

  res.render('bodytest', {
    title: 'ForkSmart',
    hungrySympton: hungrySympton.sympton
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


module.exports = router