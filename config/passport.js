// NOTE:　password-local 處理認證的中介軟體
const password = require('passport')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')
const forkSmartUser = require('../models/User')

