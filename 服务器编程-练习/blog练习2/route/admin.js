const express = require('express');
const admin = express.Router();
const { User } = require('../model/user')
const bcrypt = require('bcryptjs');
admin.get('/login', (req, res) => {
    res.render('admin/login.html')
})
admin.get('/error', (req, res) => {

})
admin.post('/login', async(req, res) => {
    const { email, password } = req.body;
    if (email.trim().length == 0 || password.trim().length == 0) {
        return res.status(400).render('admin/error', { msg: '邮件地址或者密码错误' })
    }
    let user = await User.findOne({ email: email })
    if (user) {
        let isValid = await bcrypt.compare(password, user.password)
        if (isValid) {
            req.session.username = user.username;
            res.redirect('/admin/user')
        } else {
            res.status(400).render('admin/error', { msg: '邮件地址或者密码错误' })
        }
    } else {
        res.status(400).render('admin/error', { msg: '邮件地址或者密码错误' })
    }
})

// admin.get('/user', (req, res) => {
//     res.render('admin/user', {
//         msg: req.session.username
//     })
// })
admin.get('/user', require('./admin/userPage'));
admin.get('/logout', (req, res) => {
    req.session.destroy(function() {
        res.clearCookie('connect.sid')
        res.redirect('/admin/login')
    })
})
module.exports = admin