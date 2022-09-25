const express = require('express')

const routes= express.Router()


routes.get('/', (req, res) => {
    res.render('signup.ejs')
  })

routes.get("/login",(req, res)=>{

    res.render("login.ejs")
})

routes.get("/portal",(req, res)=>{

    res.render("portal.ejs")
})

module.exports = routes;