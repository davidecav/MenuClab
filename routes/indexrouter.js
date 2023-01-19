const express = require("express")
const conn = require('../connection');
const mysqlclass = require("../MysqlClass")

const router =express.Router()

var select1 = "select * from antipasti;"
var select2 = "select * from primi;"
var select3 = "select * from secondi;"
var select4 = "select * from contorni;"
var select5 = "select * from dolci;"
var select6 = "select * from bevande;"
var select = select1+select2+select3+select4+select5+select6

router.get("/",async(req,res)=>{
  //console.log(mysqlclass.findAll("antipasti"))

  await conn.getConnection((err,conn)=>{
    if(err){res.send("errore")}else{
      conn.query(select,(err2,rows,fields)=>{
        if(!err2){res.render("mainmenu",{antip:rows[0],primip:rows[1],secondip:rows[2],contornip:rows[3],dolcip:rows[4],bevandep:rows[5]})}
        conn.release()
      })
    }
    
  })
})
/*
router.get('/',async(req,res,next)=>{

  const antip = await executeQuery(connection,'SELECT * FROM antipasti' )
  
   res.render("index",{antip:antip})
   next()
   */

   /*
router.get("/",async(req,res)=>{
      await connection.query('SELECT * FROM antipasti', (error, rows) => {
        if (error) throw error;
        
          res.render('mainmenu',{antip:rows})
        });
  
    connection.release()
  });
*/
module.exports = router