const fs = require('fs')
const book = {
    title : "Hello!",
    author : "Bijon"
}

const bookJSON = JSON.stringify(book)

fs.writeFileSync("1-json.json",bookJSON)