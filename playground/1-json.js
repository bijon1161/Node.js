const fs = require('fs')
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const dataObject = JSON.parse(dataJSON)


dataObject.name = "Bijon"
dataObject.age = 25

fs.writeFileSync("1-json.json",JSON.stringify(dataObject))