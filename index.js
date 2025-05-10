
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
 
const githubDatabase={
  "login": "mojombo",
  "id": 1,
  "node_id": "MDQ6VXNlcjE=",
  "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/mojombo",
  "html_url": "https://github.com/mojombo",
  "followers_url": "https://api.github.com/users/mojombo/followers",
  "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
  "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
  "organizations_url": "https://api.github.com/users/mojombo/orgs",
  "repos_url": "https://api.github.com/users/mojombo/repos",
  "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
  "received_events_url": "https://api.github.com/users/mojombo/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false
}

app.get('/github',(req,res)=>{
  res.json(githubDatabase)
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

