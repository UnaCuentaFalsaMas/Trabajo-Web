import React, { useState } from 'react';
import recetas from '../recetas.json';

function BuscadorRecetas() {
  const [buscarTermino, setBuscarTermino] = useState('');
  const [buscarResultado, setBuscarResultado] = useState<any[]>([]);
  const [mostrarTodos, setMostrarTodos] = useState(false);
  const [mostrarIngredientes, setMostrarIngredientes] = useState(false);

  const cambio = (event: { target: { value: React.SetStateAction<string> } }) => {
    setBuscarTermino(event.target.value);
  };

  const buscar = () => {
    const resultado = recetas.filter((recetas) =>
      recetas.nombre.toLowerCase().includes(buscarTermino.toLowerCase())
    );
    setBuscarResultado(resultado);
    setMostrarTodos(false);
  };

  const mostrarTodosResultados = () => {
    setBuscarResultado(recetas);
    setMostrarTodos(true);
  };

  const buscarEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      buscar();
    }
  };

  const almacenarIngredientes = (ingredientes: string) => {
    const palabras = ingredientes.split(';').map((palabra) => palabra.trim());
    const mapa = new Map();
    
    palabras.forEach((palabra) => {
      if (mapa.has(palabra)) {
        mapa.set(palabra, mapa.get(palabra) + 1);
      } else {
        mapa.set(palabra, 1);
      }
    });
  
    return mapa;
  };

  const almacenarPreparacion = (preparacion: string) => {
    const palabras = preparacion.split(';').map((palabra) => palabra.trim());
    const mapa = new Map();
    
    palabras.forEach((palabra) => {
      if (mapa.has(palabra)) {
        mapa.set(palabra, mapa.get(palabra) + 1);
      } else {
        mapa.set(palabra, 1);
      }
    });
  
    return mapa;
  };

  return (
    <main>
    <div className="container text-center">
      
      <h1>Buscador de Recetas</h1>
    
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
        <button className="btn btn-outline-dark" onClick={mostrarTodosResultados}>Mostrar todas las recetas</button>
      </div>

      <div className="row">
        {mostrarTodos? recetas.map((recetas) => (
            <div key={recetas.id} className="col-lg-4 col-md-6">
                <div className="card mb-4">
                  <div className="card-body text-center">
                    <h5 className="card-title">{recetas.nombre}</h5>
                    <img src={recetas.imagen} className="card-img-top" alt="" />
                    
                    {mostrarIngredientes && (
                        <div>
                            <h5 >{recetas.titulo}</h5>
                            <div className='text-left'>
                            {Array.from(almacenarIngredientes(recetas.ingredientes)).map(([palabra]) => (
                                <p key={palabra}>{palabra}</p>
                                ))}
                            </div>
                            <h5>Preparacion:</h5>
                            <div>
                            {Array.from(almacenarPreparacion(recetas.preparacion)).map(([palabra]) => (
                                <p key={palabra}>{palabra}</p>
                                ))}
                            </div>
                            
                        </div>
                    )}
                    
                    <button className="btn btn-outline-dark" onClick={() => setMostrarIngredientes(!mostrarIngredientes)} >
                        {mostrarIngredientes ? 'Ocultar Receta' : 'Mostrar Receta'}
                    </button>
                  </div>
                </div>
            </div>
        )) :buscarResultado.map((recetas) => (
            <div key={recetas.id} className="col-lg-4 col-md-6">
                <div className="card mb-4">
                  <div className="card-body text-center">
                    <h5 className="card-title">{recetas.nombre}</h5>
                    <img src={recetas.imagen} className="card-img-top" alt="" />
                    
                    {mostrarIngredientes && (
                        <div>
                            <h5 >{recetas.titulo}</h5>
                            <div className='text-left'>
                            {Array.from(almacenarIngredientes(recetas.ingredientes)).map(([palabra]) => (
                                <p key={palabra}>{palabra}</p>
                                ))}
                            </div>
                            <h5>Preparacion:</h5>
                            <div>
                            {Array.from(almacenarPreparacion(recetas.preparacion)).map(([palabra]) => (
                                <p key={palabra}>{palabra}</p>
                                ))}
                            </div>
                            
                        </div>
                    )}
                    
                    <button className="btn btn-outline-dark" onClick={() => setMostrarIngredientes(!mostrarIngredientes)} >
                        {mostrarIngredientes ? 'Ocultar Receta' : 'Mostrar Receta'}
                    </button>
                  </div>
                </div>
            </div>
        ))}
      </div>
    </div>
    </main>
  );
}

export default BuscadorRecetas;