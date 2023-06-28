import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate  } from 'react-router-dom';
import Logo from '../assets/img/logo2.jpeg';
import axios from 'axios';
import AuthContext from '../componentes/AuthContext';



function Acceder() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [contraseniaError, setContraseniaError] = useState(false);
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const enviar = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .get(`http://localhost:3000/leer?email=${email}`)
      .then((response) => {
        const usuario = response.data.resultado[0];
        
        if (usuario) {
          // El correo electrónico existe, verificar la contraseña
          if (usuario.contrasenia === password) {
            // La contraseña es correcta
            authContext?.login(usuario);
            console.log("si");
            setMensaje('Inicio de sesión exitoso');
            navigate('/inicio');
          } else {
            // La contraseña no es correcta
            setMensaje('Contraseña o correo incorrectos');
            setContraseniaError(true);
          }
        } else {
          // El correo electrónico no existe
          setMensaje('Contraseña o correo incorrectos');
          setContraseniaError(true);
        }
      })
      .catch((error) => {
        // error
        console.error('Error al obtener el usuario:', error);
        setMensaje('Error al obtener el usuario');
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
              onChange={(e) =>{
                setEmail(e.target.value);
                setContraseniaError(false);
              }}
              isInvalid={contraseniaError}
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
              onChange={(e) => {
                setPassword(e.target.value);
                setContraseniaError(false); // Reiniciar el estado de error de contraseña al escribir en el campo
              }}
              isInvalid={contraseniaError} // Marcar el campo de contraseña como inválido si hay un error de contraseña
            />
            <Form.Control.Feedback type="invalid">{mensaje}</Form.Control.Feedback>
          </Form.Group>
          
          <br />
          <Button variant="btn btn-outline-dark" type="submit">
            Iniciar Sesión
          </Button>
          <br />
          <Link to="/registro">Registrarse</Link>
        </form>
      </div>
    </main>
  );
}

export default Acceder;