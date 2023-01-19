const express = require("express")
const mysqlclass = require("../MysqlClass")

const router =express.Router()

router.get("/",async(req,res)=>{

    
    res.render("mainmenu",{antip:mysqlclass.findAll("antipasti")})
    
  
  
})

module.exports = router