const fs = require('fs')
fs.readFile('./222.js', 'utf-8', (err, doc) => {
    console.log(err);
    console.log(doc);


})