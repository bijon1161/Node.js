const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

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
        notes.addNote(argv.title,argv.body)
    }
})

yargs.command({
    command: "remove",
    description: "Removing item",
    builder: {
        title:{
            describe: "checking title",
            demandOption: true,
            type: "string"
        }

    },
    handler: function(argv){
        notes.removeNote(argv.title)
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

