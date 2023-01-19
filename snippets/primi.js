const express = require("express")
const conn = require('../connection');

const router =express.Router()

router.get('/',async(req,res)=>{
  
  await conn.getConnection((err,conn)=>{
    if(err){res.send("errore")}else{
      conn.query("select * from primi",(err2,rows,fields)=>{
        if(!err2){res.render("mainmenu",{primip:rows})}
        conn.release()
      })
//      connection.release()
    }
    
  })
    
  });

  module.exports = router