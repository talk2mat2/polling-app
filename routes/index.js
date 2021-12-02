const Express= require('express')
const Router= Express.Router()
const {get_pu_result,get_pu_result_lga,get_pu_result_lga_post}= require('../controller/index')

Router.get("/",get_pu_result)
Router.post("/get_pu_result_lga",get_pu_result_lga_post)
Router.get("/get_pu_result_lga",get_pu_result_lga)



module.exports= Router