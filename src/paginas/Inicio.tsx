
import Tarjeta from '../componentes/Tarjeta';
import Logo from '../assets/img/logo1.jpeg';
function Inicio() {
  return (
    <>
      <main className='m-4 grid gap-12 bg-slat-100 grid-col-2 flex'>
        <h1>try</h1>
        <br />
        <Tarjeta
          titulo={'Valor nutricional'}
          link={'/comidas'}
          texto={'Verifique el valor nutricional de sus comidas'}
          img={Logo}
        />
                <Tarjeta
          titulo={'Valor nutricional'}
          link={'/comidas'}
          texto={'Verifique el valor nutricional de sus comidas'}
          img={Logo}
        />
                <Tarjeta
          titulo={'Valor nutricional'}
          link={'/comidas'}
          texto={'Verifique el valor nutricional de sus comidas'}
          img={Logo}
        />
                <Tarjeta
          titulo={'Valor nutricional'}
          link={'/comidas'}
          texto={'Verifique el valor nutricional de sus comidas'}
          img={Logo}
        />
      </main>
    </>
  );
}

export default Inicio;
