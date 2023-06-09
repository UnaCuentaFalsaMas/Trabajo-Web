

import Logo from '../assets/img/logo1.jpeg';
function Inicio() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="col">
            <h1>Inicio</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, ipsum commodi deserunt quasi tempora fugit dolorem pariatur, aperiam laborum sit corrupti sunt cumque repellat iure, fuga non odit dolor neque!
            </p>
          </div>
        </div>
      </div>

    </>
  );
}

export default Inicio;
