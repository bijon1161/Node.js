const fs = require('fs')
const book = {
    title : "Hello!",
    author : "Bijon"
}

const bookJSON = JSON.stringify(book)

const dataBuffer = fs.readFileSync("1-json.json")
const dataJSON = JSON.parse(dataBuffer.toString())
console.log(dataJSON.author)