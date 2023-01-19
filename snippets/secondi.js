const express = require("express")
const conn = require('../connection');

const router =express.Router()

router.get('/',async (req,res)=>{

  await conn.getConnection((err,conn)=>{
    if(err){res.send("errore")}else{
      conn.query("select * from secondi",(err2,rows,fields)=>{
        if(!err2){res.render("mainmenu",{secondip:rows})}
        conn.release()
      })
    }
    
  })
/*
      conn.query('SELECT * FROM secondi', (error, rows) => {
        if (error) throw error;
        
          res.render('mainmenu',{secondip:rows})
        });
        
        */
  });
module.exports = router