const express = require('express')
const {auto }= require('./database/db')
const Router= require("./routes/index")
require('dotenv').config()
// auto.run()
const App= express()
App.use(express.json())
App.use(express.urlencoded())
App.set('view engine',"ejs")
App.use(express.static("views"))
const Port= process.env.PORT || 8080
// App.get("/",(req,res)=>{
//     return res.render('index')
// })
App.use("/",Router)


App.listen(Port,(err,result)=>{
    if(err) throw err;
    console.log('server runing on port on port ',Port)
})