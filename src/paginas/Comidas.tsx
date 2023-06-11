import axios from 'axios';
import Tarjeta from '../componentes/Tarjeta';
import { useEffect, useState } from 'react';
const url = 'https://api.edamam.com/api/food-database/v2/parser';
const app_id = '3787299d';
const app_key = 'c13dcc41b6991fd66541e68fa3eeba08';

type APIComida = {
  foodId: string;
  label: string;
  knowAs: string;
  nutrients: {
    ENERC_KCAL: number;
    PROCNT: number;
    FAT: number;
    CHOCDF: number;
  };
  brand: string;
  category: string;
};

const Comidas = () => {
  const [comidas, setComidas] = useState<APIComida[]>([]);
  const [busqueda, setBusqueda] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (busqueda !== '') {
      buscar(busqueda);
    }
  }, [busqueda]);

  function buscar(busqueda: string) {
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
        setComidas([]);
        setComidas(response.data.hints.map((hint: { food: any; }) => hint.food));
        setError('');
      })
      .catch(function (error) {
        console.log(error);
        setError(error.message);
      });
  }

  function handleBuscar() {
    const input = document.getElementById('busqueda') as HTMLInputElement;
    const valorBusqueda = input.value;
    setBusqueda(valorBusqueda);
    input.value = '';
  }

  return (
    <div className='flex-container text-center'>
      <h1>Valor nutricional</h1>
      <input type="text" id="busqueda" placeholder="Buscar comida" />
      <button className='btn btn-outline-dark' onClick={handleBuscar}>Buscar</button>
      {error && <p>{error}</p>}

      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
            {comidas.map((comida) => (
              <div className="col" key={comida.foodId}><Tarjeta alimento={comida} /></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comidas;