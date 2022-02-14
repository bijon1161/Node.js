const chalk = require('chalk')
const yargs = require('yargs')

const error = chalk.bold.cyan
const warning = chalk.bold.yellow
const success = chalk.bold.green

yargs.command({
    command: "add",
    description: "Adding item",
    builder: {
        title:{
            describe: "Note title",
            demandOption: true,
            type: "string",
        },
        body:{
            describe: "Body element",
            demandOption: true,
            type: "string",

        }

    },
    handler: function(argv){
        console.log(error("Title: "+argv.title))
        console.log(success("Body: "+argv.body))
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

yargs.parse()

