if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
console.log(`Does the dotenv work:${process.env.DOTENV_WORK}`)

// TODO: 資料庫連線
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_KEY, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', (error) => { console.log(`MongoDB connected Failed ${error}`) })
db.once('open', () => { console.log(`MongoDB connected`) })

module.exports = db;