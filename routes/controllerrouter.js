const express = require("express")
const conn = require('../connection');

const router =express.Router()

router.use(express.urlencoded({ extended: true })); 

router.get("/",(req,res)=>{
  
  const { piatto, nome, prezzo, ingredienti } = req.query;
 
  if(piatto==="bevande"){
    var insertsql = `insert into ${piatto}(nome,prezzo)values('${nome}','${prezzo}')`
    
  }else{

    var insertsql = `insert into ${piatto}(nome,prezzo,ingredienti)values('${nome}','${prezzo}','${ingredienti}')`
  }
  //console.log(insertsql)
  conn.execute(insertsql)
  
  res.render("controllermenu")
  
})


  module.exports = router