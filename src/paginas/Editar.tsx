import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Editar() {
    const [email, setEmail] = useState('');
    const [nombre, setNombre] = useState('');
    const [mensaje, setMensaje] = useState('');
    const navigate = useNavigate();

  const editar = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
        await axios.put('http://localhost:3000/editarCuenta', { nombre, email });
        navigate('/admin');

    } catch (error) {
      // error
      console.error('Error al editar:', error);
      setMensaje('Error al editar');
    }
  };

  return (
    <main>
      <br />
      <h1 style={{ textAlign: 'center' }}>Editar cuenta</h1>
      <div className="container d-flex flex-column align-items-center mt-5">
      <form style={{ width: '50%' }} onSubmit={editar}>
          <Form.Group>
            <Form.Label>Ingrese el email de la cuenta que desea editar</Form.Label>
            <Form.Control
              required
              type="email"
              id="email"
              name="email"
              placeholder="Ingresar Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Ingrese el nombre que desea cambiar</Form.Label>
            <Form.Control
              required
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Ingresar nombre"
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value);
              }}
            />
          </Form.Group>
          <br />
          <Button variant="btn btn-outline-dark" type="submit">
            Editar cuenta
          </Button>
        </form>
      </div>
    </main>
  );
}

export default Editar;