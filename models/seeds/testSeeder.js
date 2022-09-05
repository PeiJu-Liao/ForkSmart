// TODO: 新增種子資料 / 設定資料庫連線

const mongoose = require('mongoose')
const bodytest = require('../Test')
const testList = require('../../bodytest.json').bodytest

const db = require('../../config/data')

db.once('open', () => {
  console.log(`MongoDB bodytest data seeder connected.`)
  testList.forEach(test => {
    bodytest.create({
      gender: test.gender,
      height: test.height,
      weight: test.weight,
      age: test.age,
    })
  })
  console.log(`seeder done`)
})