import React from 'react';
import { Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo2.jpeg';

function Acceder() {
    return (
        <>
        <main>
                 <div className="container d-flex flex-column align-items-center mt-5">
          <img className="rounded-circle" style={{ width: '25%' }} src={Logo} alt="" />
          <form style={{ width: '50%' }}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ingresar Email" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Ingresar Contraseña" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">Iniciar Sesion</Button>
            <br />
            <Link to="reg">Registrarse</Link>
          </form>
        </div>
      </main>
        </>
    );
}

export default Acceder;
