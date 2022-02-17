const express = require('express')
const app = express()

app.get('',(req,res)=>{
    res.send("Hello! Express")
})

app.get('/help',(req,res)=>{
    res.send("Hello! This is help page")
})

app.get('/about',(req,res)=>{
    res.send("Hello! This is about page")
})

app.get('/weather',(req,res)=>{
    res.send("Hello! This is weather page")
})


app.listen(3000,()=>{
    console.log("Opening server")
})

