import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function Registro() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <main>
      <br />
      <h1 style={{ textAlign: 'center' }}>Registro</h1>
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
              id="mail"
              name="mail"
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
          <Form.Group>
            <Form.Label as="legend">Género</Form.Label>
            <Form.Check
              type="radio"
              name="genero"
              id="generoM"
              label="Masculino"
            />
            <Form.Check
              type="radio"
              name="genero"
              id="generoF"
              label="Femenino"
            />
            <Form.Check
              type="radio"
              name="genero"
              id="generoOtro"
              label="Otro"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Edad</Form.Label>
            <Form.Control
              required
              type="number"
              id="edad"
              name="edad"
              placeholder="Edad"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Altura Ejemplo: ( 180cm )</Form.Label>
            <Form.Control
              required
              type="number"
              id="altura"
              name="altura"
              placeholder="Altura"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Peso Kg</Form.Label>
            <Form.Control
              required
              type="number"
              id="peso"
              name="peso"
              placeholder="Peso"
            />
          </Form.Group>
          <Button type="submit" variant="primary">Registrarse</Button>
        </Form>
      </div>
    </main>
  );
}

export default Registro;

             
