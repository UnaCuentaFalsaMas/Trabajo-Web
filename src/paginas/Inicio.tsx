

import LogoIMC from '../assets/img/IMC.jpg';
import LogoAlimentacion from '../assets/img/alimentacion.jpg';
import LogoCalorias from '../assets/img/calorias.jpg';
import LogoEjercicio from '../assets/img/ejercicios.jpg';
import ACC from '../componentes/ACC';

function Inicio() {
  return (
    <>
      <div className="container text-center ">
        <div className="row justify-content-center">
              <ACC
                titulo={'Calcular IMC'}
                link={'/calculadora'}
                texto={'Calcula tu indice de masa corporal'}
                img={LogoIMC}
              />
              <ACC
                titulo={'Alimentacion Saludable'}
                link={'/comidas'}
                texto={'Verifica el valor nutricional de sus alimentos'}
                img={LogoAlimentacion}
              />  
        </div>
        <div className="row justify-content-center">
              <ACC
                titulo={'Contador de Calorías'}
                link={'/calorias'}
                texto={'Calcula las calorías que consumes'}
                img={LogoCalorias}
              />
              <ACC
                titulo={'Ejercicios'}
                link={'/ejercicios'}
                texto={'Mira los ejercicios para entrenar'}
                img={LogoEjercicio}
              />  
        </div>
      </div>

    </>
  );
}

export default Inicio;
