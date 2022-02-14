const chalk = require('chalk')

const error = chalk.bold.red
const warning = chalk.bold.yellow
const success = chalk.bold.green

if (process.argv[2]==="add")
{
    console.log(success("Adding items"))
}
else if(process.argv[2]==="remove")
{
    console.log(warning("Removing items"))
}


