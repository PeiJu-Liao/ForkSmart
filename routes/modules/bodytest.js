const express = require('express')
const router = express.Router()
const Bodytest = require('../../models/Test')
const hungrySympton = require('../../bodytest.json')
const { ensureAuthenticated } = require('../../config/auth');

router.get('/', (req, res) => {
  res.render('bodytest', {
    title: 'ForkSmart',
    hungrySympton: hungrySympton.sympton,
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


module.exports = router