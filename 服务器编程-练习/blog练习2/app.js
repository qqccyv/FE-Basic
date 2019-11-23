const express = require('express');
const app = express();
const path = require('path')
const home = require('./route/home')
const admin = require('./route/admin')
const bodyPaser = require('body-parser')
const session = require('express-session')
require('./model/connect')
app.use(session({
    secret: 'secret key',
    saveUninitialized: false,
    cookie: {
        maxAge: 24 * 60 * 60 * 1000
    }
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'art');
app.engine('html', require('express-art-template'))
app.engine('art', require('express-art-template'))
app.use(bodyPaser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/admin', require('./middleware/loginGuard'))
app.use('/home', home)
app.use('/admin', admin);
// app.on('request', (req, res) => {
//     res.send('hello')
// })

app.listen(80)
console.log('服务器启动成功');