const express = require("express")
const conn = require('../connection');

const router =express.Router()

router.use(express.urlencoded({ extended: true })); 


var select1 = "select * from antipasti;"
var select2 = "select * from primi;"
var select3 = "select * from secondi;"
var select4 = "select * from contorni;"
var select5 = "select * from dolci;"
var select6 = "select * from bevande;"
var select = select1 + select2 + select3 + select4 + select5 + select6

router.get("/",async(req,res)=>{
    //console.log(mysqlclass.findAll("antipasti"))
  
    await conn.getConnection((err,conn)=>{
      if(err){res.send("errore")}else{
        conn.query(select,(err2,rows,fields)=>{
          if(!err2){res.render("eliminapiatti",{
            antip:rows[0],
            primip:rows[1],
            secondip:rows[2],
            contornip:rows[3],
            dolcip:rows[4],
            bevandep:rows[5]
          })}
          conn.release()
        })
      }
      
    })
   /* 
    var deletesql = `drop from ${piatto} where nome ='${nome}'`
    console.log(deletesql)
    await conn.getConnection((err,conn)=>{
      conn.execute(insertsql)
    })
    */
  })

  
  router.delete("/:piatto/:nome",async(req,res)=>{
    let nome = req.params.nome;
    let piatto = req.params.piatto;
    
    var deletesql = `DELETE FROM ${conn.escape(piatto)} WHERE nome = ${conn.escape(nome)}`;
    console.log(deletesql)
    await conn.getConnection((err,conn)=>{
      conn.query(deletesql,(err,result)=>{

  res.render("eliminapiatti")
        
      });
    });
});
  module.exports = router