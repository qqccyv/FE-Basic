const fs = require('fs');
fs.writeFile('./lianxi.txt', '再写写', (err) => {
    if (err != null) {
        console.log('输入失败');

    }
    console.log('输入成功');

})