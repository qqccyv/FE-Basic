const express = require('express');
const admin = express.Router();
// const { User } = require('../model/user')
// const bcrypt = require('bcryptjs');
admin.get('/login', require('./admin/loginPage'))

admin.post('/login', require('./admin/login'))


admin.get('/user', require('./admin/userPage'));
admin.get('/logout', require('./admin/logout'))
module.exports = admin