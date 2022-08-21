const express = require('express')
const router = express.Router()

// Route
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Fork Smart'
  });
})

module.exports = router