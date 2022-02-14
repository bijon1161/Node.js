const chalk = require('chalk')

const error = chalk.bold.red
const warning = chalk.bold.yellow
const success = chalk.bold.green

console.log(error("Try again!"))
console.log(warning("Are you sure?"))
console.log(success("You've succeeded"))