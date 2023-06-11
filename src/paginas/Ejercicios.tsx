import React, { useState } from 'react';
import ejercicios from '../ejercicios.json';

function BuscadorEjercicios() {
  const [buscarTermino, setBuscarTermino] = useState('');
  const [buscarResultado, setBuscarResultado] = useState<any[]>([]);
  const [mostrarTodos, setMostrarTodos] = useState(false);

  const cambio = (event: { target: { value: React.SetStateAction<string> } }) => {
    setBuscarTermino(event.target.value);
  };

  const buscar = () => {
    const resultado = ejercicios.filter((ejercicio) =>
      ejercicio.nombre.toLowerCase().includes(buscarTermino.toLowerCase())
    );
    setBuscarResultado(resultado);
    setMostrarTodos(false);
  };

  const mostrarTodosResultados = () => {
    setBuscarResultado(ejercicios);
    setMostrarTodos(true);
  };

  const buscarEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      buscar();
    }
  };

  return (
    <main>
    <div className="container text-center">
      
      <h1>Buscador de Ejercicios</h1>
    
      <div className="mb-3">
        <input
          type="text"
          placeholder="Ej: barra"
          value={buscarTermino}
          onChange={cambio}
          onKeyDown={buscarEnter}
        />
        <button className="btn btn-outline-dark" onClick={buscar}>Buscar</button>
      </div>

      <div className="mb-3">
        <button className="btn btn-outline-dark" onClick={mostrarTodosResultados}>Mostrar todos los ejercicios</button>
      </div>

      <div className="row">
        {mostrarTodos? ejercicios.map((ejercicio) => (
            <div key={ejercicio.id} className="col-lg-4 col-md-6">
                <div className="card mb-4">
                  <div className="card-body text-center">
                    <h5 className="card-title">{ejercicio.nombre}</h5>
                  </div>
                  <img src={ejercicio.imagen} className="card-img-top" alt="" />
                </div>
            </div>
        )) :buscarResultado.map((ejercicio) => (
            <div key={ejercicio.id} className="col-lg-4 col-md-6">
                <div className="card mb-4">
                  <div className="card-body text-center">
                    <h5 className="card-title">{ejercicio.nombre}</h5>
                  </div>
                  <img src={ejercicio.imagen} className="card-img-top" alt="" />
                </div>
            </div>
        ))}
      </div>
    </div>
    </main>
  );
}

export default BuscadorEjercicios;