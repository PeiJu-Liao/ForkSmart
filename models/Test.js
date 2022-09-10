// TODO: 建立bodytest的資料庫綱要
const mongoose = require('mongoose')
const { Schema } = mongoose
const moment = require('moment')

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
  sympton: {
    type: [String],
    required: true,
  },
  moodrecord: {
    type: String,
    required: true,
  },
  mood: {
    type: String,
    required: true,
  },
  bmi: {
    type: Number,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
    // default: moment(Date.now).format('YYYY-MM-DD'),
  }
})

module.exports = mongoose.model('bodytestData', bodyTestSchema)