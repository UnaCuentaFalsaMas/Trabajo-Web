import { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../componentes/AuthContext';

function Crear() {
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const handleSubmit = (event: { preventDefault: () => void; stopPropagation: () => void; currentTarget: any; }) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    const datoContrasenia1 = form.elements.password.value;
    const datoContrasenia2 = form.elements.password2.value;
    if (
      form.checkValidity() === false ||
      datoContrasenia1 !== datoContrasenia2
    ) {
      if (datoContrasenia1 !== datoContrasenia2) {
        alert('Las contraseñas no coinciden');
      }
      setValidated(true);
      return;
    } else {
      console.log('Formulario válido');
      console.log(form.elements.nombre.value);
      const data = {
        nombre: form.elements.nombre.value,
        apellido: form.elements.apellido.value,
        usuario: form.elements.usuario.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        admin: 1,
      };

      axios
        .put('http://localhost:3000/crearAdmin', data, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          if (response.status === 200) {
            setValidated(true);
            console.log('Registro guardado exitosamente');
            form.reset();
            authContext?.login(response.data.resultado[0]);
            navigate('/admin');
          } else {
            console.log('Error al guardar el registro');
          }
        })
        .catch((error) => {
          console.error('Error al realizar la solicitud:', error);
        });
    }
  };

  return (
    <main>
      <br />
      <h1 style={{ textAlign: 'center' }}>Registrar administrador</h1>
      <div className="container d-flex flex-column align-items-center mt-5">
        <Form
          className="shadow p-3 mb-5 bg-white rounded"
          style={{ width: '50%' }}
          id="formulario"
          name="formulario"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              required
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Nombre"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Apellidos</Form.Label>
            <Form.Control
              required
              type="text"
              id="apellido"
              name="apellido"
              placeholder="Apellido"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              required
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              id="email"
              name="email"
              placeholder="Ingresar Email"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              required
              type="password"
              id="password"
              name="password"
              placeholder="Contraseña"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Repetir contraseña</Form.Label>
            <Form.Control
              required
              type="password"
              id="password2"
              name="password2"
              placeholder="Contraseña"
            />
          </Form.Group>
          <br />
          <Button type="submit" variant="btn btn-outline-dark">
            Registrarse
          </Button>
        </Form>
      </div>
    </main>
  );
}

export default Crear;
