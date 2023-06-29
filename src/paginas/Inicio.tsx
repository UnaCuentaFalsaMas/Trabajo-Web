
import LogoIMC from '../assets/img/IMC.jpg';
import LogoAlimentacion from '../assets/img/alimentacion.jpg';
import LogoCalorias from '../assets/img/calorias.jpg';
import LogoEjercicio from '../assets/img/ejercicios.jpg';
import LogoRecetas from '../assets/img/recetas2.jpg';
import ACC from '../componentes/ACC';

function Inicio() {
  return (
    <main>
      <div className="container text-center ">
        <div className="row justify-content-center">
              <ACC
                titulo={'Calcular IMC'}
                link={'/calculadora'}
                texto={'Calcula tu índice de masa corporal'}
                img={LogoIMC}
              />
              <ACC
                titulo={'Contador de Calorías'}
                link={'/calorias'}
                texto={'Calcula las calorías que consumes'}
                img={LogoCalorias}
              />
        </div>
        <div className="row justify-content-center">
              <ACC
                titulo={'Comida Saludable'}
                link={'/comidas'}
                texto={'Verifica el valor nutricional de sus alimentos'}
                img={LogoAlimentacion}
              />  
              <ACC
                titulo={'Receta Saludable'}
                link={'/recetas'}
                texto={'Encuentra recetas saludables para preparar'}
                img={LogoRecetas}
              />
        </div>
        <div className="row justify-content-center">
              <ACC
                titulo={'Ejercicios'}
                link={'/ejercicios'}
                texto={'Mira los ejercicios para entrenar'}
                img={LogoEjercicio}
              /> 
        </div>
      </div>

    </main>
  );
}

export default Inicio;
