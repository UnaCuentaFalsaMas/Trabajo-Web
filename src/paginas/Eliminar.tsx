import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Eliminar() {
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');
    const navigate = useNavigate();

  const eliminar = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
        await axios.delete('http://localhost:3000/delete', { data: { email } });
      navigate('/admin');

    } catch (error) {
      // error
      console.error('Error al obtener el usuario:', error);
      setMensaje('Error al obtener el usuario');
    }
  };

  return (
    <main>
      <br />
      <h1 style={{ textAlign: 'center' }}>Eliminar cuenta</h1>
      <div className="container d-flex flex-column align-items-center mt-5">
      <form style={{ width: '50%' }} onSubmit={eliminar}>
          <Form.Group>
            <Form.Label>Ingrese el email de la cuenta que desea eliminar</Form.Label>
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
          <br />
          <Button variant="btn btn-outline-dark" type="submit">
            Eliminar cuenta
          </Button>
        </form>
      </div>
    </main>
  );
}

export default Eliminar;
