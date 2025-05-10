
//we use environment variables to make our application production ready, now port is a variable, now for different systems it can have different values
require('dotenv').config()

const express = require('express')  //->line 1
//import express from "express"     //->line 2 (these 2 lines are doing same work just two different styles)

const app = express()
//like Math.pow(), so here express is like math and app.get() is like Math.pow()

const port = 5000
const PORT=process.env.PORT
app.get('/', (req, res) => {
  res.send('Hello World!')
})
 
app.get('/twitter', (req,res)=>{
    res.send('dishadotcom')
})

app.get('/login', (req,res)=>{
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube',(req,res)=>{ 
    res.send("<h2>chai aur code </h2>")
})
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

