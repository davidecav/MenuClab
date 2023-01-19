const express = require('express');
const mysql = require('mysql');
const app = express();

// Crea la connessione MySQL
const connection = mysql.createConnection({
  host: "localhost",
  user : "davide",
  password : "AH725bud2/",
  database: "clab",
});

app.use('/', async function (req, res, next) {
  // Esegue la query MySQL
  const results = await executeQuery(connection, 'SELECT * FROM antipasti');
  // Aggiunge i risultati all'oggetto della richiesta
  req.results = results;
  // Passa il controllo al prossimo gestore della richiesta
  next();
});

app.get('/', function (req, res) {
  // Invia il risultato al client utilizzando il metodo render
  res.render('mainmenu', { antip: req.results });
});

// Funzione che esegue una query MySQL e restituisce il risultato
async function executeQuery(connection, query) {
  return new Promise((resolve, reject) => {
    connection.query(query, function (error, antip) {
      if (error) {
        reject(error);
      } else {
        resolve(antip);
      }
    });
  });
}



app.all("*",(req,res)=>{
  res.send("<h1>risorsa non trovata</h1>")
})

app.listen(3000, () => console.log('Server listening on port 3000'));

