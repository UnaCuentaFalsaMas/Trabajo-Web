//import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo2.jpeg';

function Acceder() {
  const enviar = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
  };

  return (
    <main>
      <div className="container d-flex flex-column align-items-center mt-5">
        <img className="rounded-circle" style={{ width: '25%' }} src={Logo} alt="" />
        <form style={{ width: '50%' }} onSubmit={enviar}>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" placeholder="Ingresar Email" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" name="password" placeholder="Ingresar Contraseña" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <br />
          <Button variant="btn btn-outline-dark" type="submit">
            Iniciar Sesión
          </Button>
          <br />
          <Link to="/registro" >Registrarse</Link>
        </form>
      </div>
    </main>
  );
}

export default Acceder;