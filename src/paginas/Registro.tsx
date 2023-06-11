import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function Registro() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event: { preventDefault: () => void; stopPropagation: () => void; currentTarget: any; }) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    const datoContrasenia1 = document.getElementById('password') as HTMLInputElement;
    const datoContrasenia2 = document.getElementById('password2') as HTMLInputElement;

    if (form.checkValidity() === false || datoContrasenia1.value !== datoContrasenia2.value) {
      if (datoContrasenia1.value !== datoContrasenia2.value) {
        setValidated(true);
      }
      return;
    }

    const data = {
      nombre: form.elements.nombre.value,
      apellido: form.elements.apellido.value,
      usuario: form.elements.usuario.value,
      mail: form.elements.mail.value,
      password: form.elements.password.value,
      genero: form.elements.genero.value,
      edad: form.elements.edad.value,
      altura: form.elements.altura.value,
      peso: form.elements.peso.value,
    };

    try {
      const response = await fetch('http://localhost:3000/api/registros', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setValidated(true);
        console.log('Registro guardado exitosamente');

        // Restablecer los valores de los campos
        resetFields(form);
      } else {
        console.error('Error al guardar el registro');
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
  };

  const resetFields = (form: { reset: () => void; }) => {
    form.reset();
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
              value="Masculino"
            />
            <Form.Check
              type="radio"
              name="genero"
              id="generoF"
              label="Femenino"
              value="Femenino"
            />
            <Form.Check
              type="radio"
              name="genero"
              id="generoOtro"
              label="Otro"
              value="Otro"
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
          <br />
          <Button type="submit" variant="btn btn-outline-dark">
            Registrarse
          </Button>
        </Form>
      </div>
    </main>
  );
}

export default Registro;