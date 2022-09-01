const express = require('express')
const router = express.Router()
const forksmartData = require('../../forksmart.json')

// Route
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Fork Smart',
    forksmartData: forksmartData.results
  });
})

module.exports = router