const fs = require('fs')
const chalk = require('chalk')

const getNotes= function(){
    console.log("Your notes...")
}

const addNote = function(title,body){
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })

    if (duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body

    })

  
    saveNotes(notes)
    console.log(chalk.green("New note added!"))
}else {
    console.log(chalk.red("Note title taken!"))
}

}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)


}

const loadNotes =function(){
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e)
    {
        return []
    }
}

const removeNote = function(title){
    notes= loadNotes()
    var v=0
    notes.filter(function(note){
        
        if (note.title===title){
           // notes.pop(title)
           v=1
           console.log(chalk.green("Note has been removed!"))
           
        }
        
    })
    if(v===0)
    {
        
        console.log(chalk.red("Note title is invalid"))
    
        
    }
    
    

}


module.exports =
{
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
} 