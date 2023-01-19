const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  //const nome = document.getElementById('nome').value;
  
  //const prezzo = document.getElementById('prezzo').value;

  console.log("prova")

  document.getElementById("tipidipiatto").forEach(element => {
    if(element.checked){

      console.log(element.value)
    }
  });

  /*axios.post('http://localhost:3000/submit', { name, age })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
    */

    console.log(event)
});


