// TODO: 建立bodytest的資料庫綱要
const mongoose = require('mongoose')
const { Schema } = mongoose

const bodyTestSchema = new Schema({
  gender: {
    type: String,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  result: {
    type: String,
    required: true,
  },
  bmi: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('bodytestData', bodyTestSchema)