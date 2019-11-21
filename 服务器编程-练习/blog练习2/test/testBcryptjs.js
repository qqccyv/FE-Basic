const bcrypt = require('bcryptjs')
async function run() {
    let salt = await bcrypt.genSalt(10)
    let hash = await bcrypt.hash('123456', salt)
    var isValide = await bcrypt.compare('123456', '$2a$10$DVEyERrB6wlLjTYiEd0kvu2Mg135ctOo/ow1DwTkrVcoZ49fpHEqu')
    console.log(isValide);

    // console.log(hash);

}
run();