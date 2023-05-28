import axios from 'axios';
const url = 'https://api.edamam.com/api/food-database/v2/parser';
const app_id = '3787299d';
const app_key = 'c13dcc41b6991fd66541e68fa3eeba08';

function buscar() {
  var input = document.getElementById('busqueda') as HTMLInputElement;
  var resultado = document.getElementById('resultado') as HTMLParagraphElement;
  var busqueda = input.value;
  axios
    .get(url, {
      params: {
        ingr: busqueda,
        app_id: app_id,
        app_key: app_key,
      },
    })
    .then(function (response) { 
      console.log(response);
      resultado.innerHTML = JSON.stringify(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {});
}

function Comidas() {
  return (
    <div>
      <h1>Comidas</h1>
      <input type="text" id="busqueda" placeholder="Buscar comida" />
      <button onClick={buscar}>Buscar</button>
      <p id="resultado"></p>
    </div>
  );
}

export default Comidas;
