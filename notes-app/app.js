const chalk = require('chalk')
const yargs = require('yargs')

const error = chalk.bold.cyan
const warning = chalk.bold.yellow
const success = chalk.bold.green

yargs.command({
    command: "add",
    description: "Adding item",
    handler: function(){
        console.log(error("Adding item in the list"))
    }
})

yargs.command({
    command: "remove",
    description: "Removing item",
    handler: function(){
        console.log(warning("Removing item from the list"))
    }
})

yargs.command({
    command: "read",
    description: "Reading item",
    handler: function(){
        console.log(success("Reading item form the list"))
    }
})

yargs.command({
    command: "list",
    description: "Showing item",
    handler: function(){
        console.log(success("Showing item of the list"))
    }
})

console.log(yargs.argv)
