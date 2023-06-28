//import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo2.jpeg';
import { useState } from 'react';
import axios from 'axios';

function Acceder() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [respuesta, setRespuesta] = useState('');

  const enviar = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    // Realizar una solicitud GET al servidor para validar el correo electrónico
    axios.get(`http://localhost:5001/leer?email=${email}`).then((response) => {
        const usuario = response.data.resultado[0];
      

        if (usuario) {
          // El correo electrónico existe, verificar la contraseña
          console.log(usuario.contrasenia);
          console.log(password);
          if (usuario.contrasenia === password) {
            // La contraseña es correspondiente, puedes continuar con la lógica de inicio de sesión
            console.log('Inicio de sesión exitoso');
            setRespuesta('Inicio de sesión exitoso');
            
          } else {
            // La contraseña no es correspondiente, muestra un mensaje de error o realiza alguna acción adicional
            console.log('Contraseña incorrecta');
            setRespuesta('Contraseña o correo incorrecto');
            
          }
        } else {
          // El correo electrónico no existe, muestra un mensaje de error o realiza alguna acción adicional
          console.log('El correo electrónico no existe');
          setRespuesta('Contraseña o correo incorrecto');
        }
      })
      .catch((error) => {
        console.error('Error al obtener el usuario:', error);
      });
  };

  return (
    <main>
      <div className="container d-flex flex-column align-items-center mt-5">
        <img className="rounded-circle" style={{ width: '25%' }} src={Logo} alt="" />
        <form style={{ width: '50%' }} onSubmit={enviar}>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              id="email"
              name="email"
              placeholder="Ingresar Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              required
              type="password"
              id="password"
              name="password"
              placeholder="Ingresar Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <br />
          <Button variant="btn btn-outline-dark" type="submit">
            Iniciar Sesión
          </Button>
     
           <div>
            {respuesta? <p>{respuesta}</p> : null}
           </div>
  
          <br />
          <Link to="/registro">Registrarse</Link>
        </form>
      </div>
    </main>
  );
}

export default Acceder;