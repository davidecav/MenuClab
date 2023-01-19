const mysql = require('mysql2');
const dotenv = require("dotenv")

dotenv.config()


const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    multipleStatements:true,
    connectionLimit:10, 

  });


var sql ="select * from antipasti"

connection.execute(sql,(err,res)=>{
  if(err)throw err
  return res;

  
})

module.exports = connection ;
//module.exports = connection.promise() ;