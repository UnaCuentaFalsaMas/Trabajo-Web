import React from 'react';
import logo from '../assets/img/logo2.jpeg';
function Acerca() {
  return (

    <main>
      <div className="container text-center">
      <h1>¿Quienes somos?</h1>
      <img  className="rounded-circle" src={logo} alt=""/>

      <p>Somos un grupo de estudiantes de la Pontificie Universidad Catolica
        de Valparaiso que se dedica a la creación de aplicaciones web para
        la comunidad. Nuestro objetivo es crear aplicaciones que faciliten
        la vida de las personas.</p>

      <h1>¿Que hacemos?</h1>

      <p>Desarrollamos aplicaciones web para la comunidad, con el fin de
        facilitar la vida de las personas. Nuestro objetivo es crear
        aplicaciones que faciliten la vida de las personas.</p>

        </div>

    </main>

  );
}

export default Acerca;