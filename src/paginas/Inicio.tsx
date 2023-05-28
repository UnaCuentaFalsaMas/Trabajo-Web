import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
function Inicio() {
  return (
    <>
      <main>
        <Container className="pt-5">
          <div className="row">
            <div className="col-md-6 mb-4">
              <Link to="/imc">
                <div className="bg-light p-3 h-100 rounded">
                  <h2>Calculador de IMC</h2>
                  <p>
                    Para conocer tu índice de masa corporal y evaluar el tamaño
                    de tu cuerpo, ingresa aquí.
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-md-6 mb-4">
              <Link to="/comidas">
                <div className="bg-light p-3 h-100 rounded">
                  <h2>Alimentación Saludable</h2>
                  <p>
                    La alimentación es primordial para llevar un estilo de vida
                    saludable.
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-md-6 mb-4">
              <Link to="/cont-calorias">
                <div className="bg-light p-3 h-100 rounded">
                  <h2>Contador de Calorías</h2>
                  <p>
                    Llevar un conteo de lo que consumes a diario es
                    imprescindible para una vida equilibrada.
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-md-6 mb-4">
              <Link to="/cont-calorias">
                <div className="bg-light p-3 h-100 rounded">
                  <h2>Contador de Calorías</h2>
                  <p>
                    Llevar un conteo de lo que consumes a diario es
                    imprescindible para una vida equilibrada.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}

export default Inicio;
