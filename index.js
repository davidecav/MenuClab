const express = require('express');
//path e' embedded ma necessario per ejs
const path = require('path');



const app = express();
//importo i router
const renderrouter = require('./routes/indexrouter')
const controllerrouter = require("./routes/controllerrouter")
const eliminarouter = require("./routes/modificarouter")





const hbs = require('hbs')    /////////////////
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'hbs');



hbs.registerPartials(path.join(__dirname,'views/partials'),(err) =>{
  
})

//static operations

let options={

  dotfiles: "ignore", //allow, deny, ignore
  etag: true,
  extensions: ["htm", "html"],
  index: false, //to disable directory indexing
  maxAge: "7d",
  redirect: false,
  setHeaders: function(res, path, stat) {
    //add this header to all static responses
    res.set("x-timestamp", Date.now());
  }
}

//da usare prima di tutto gli app.use(qualcosa), in questo caso per usare gli static, 
//ovvero gli elementi della cartella public
app.use(express.static("public", options));


//usare router multipli
app.use("/", renderrouter)
app.use("/controllermenu", controllerrouter)
app.use("/eliminapiatti", eliminarouter)





app.all("*",(req,res)=>{
        res.send("<h1>risorsa non trovata</h1>")
})

app.listen(3000, () => console.log('Server listening on port 3000'));

