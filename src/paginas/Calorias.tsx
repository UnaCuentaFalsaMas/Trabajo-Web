import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function calcularCalorias(altura: number, peso: number, sexo: number, edad: number, factor: number) {
  if (sexo === 1) {
    return ((655 + 9.6 * peso) + 1.8 * altura - 4.7 * edad) * factor;
  } else {
    return ((66 + 13.7 * peso) + 5 * altura - 6.8 * edad) * factor;
  }
}

function Calorias() {
  const [resultado, setResultado] = useState<number | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const altura = parseFloat((document.getElementById("altura") as HTMLInputElement).value);
    const peso = parseFloat((document.getElementById("peso") as HTMLInputElement).value);
    const sexo = parseFloat((document.getElementById("sexo") as HTMLInputElement).value);
    const edad = parseFloat((document.getElementById("edad") as HTMLInputElement).value);
    const factor = parseFloat((document.getElementById("factor") as HTMLInputElement).value);
    const cantCalorias = calcularCalorias(altura, peso, sexo, edad, factor);
    setResultado(cantCalorias);
  }

  return (
    <main>
      <div className="flex-container text-center">
        <h1>Contador de Calorías</h1>
        <Form className="container p-3" onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Altura</Form.Label>
            <Form.Control
              required
              type="number"
              id="altura"
              name="altura"
              placeholder="180 centimetros"
              step={0.01}
              min={50}
              max={300}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Peso</Form.Label>
            <Form.Control
              required
              type="number"
              id="peso"
              name="peso"
              placeholder="80 kg"
              step={0.1}
              min={15}
              max={650}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Sexo</Form.Label>
            <Form.Control
              required
              as="select"
              id="sexo"
              name="sexo"
            >
              <option value="0">Masculino</option>
              <option value="1">Femenino</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Edad</Form.Label>
            <Form.Control
              required
              type="number"
              id="edad"
              name="edad"
              placeholder="30 años"
              min={1}
              max={120}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Factor de actividad</Form.Label>
            <Form.Control
              required
              as="select"
              id="factor"
              name="factor"
            >
              <option value="1.2">Sedentario</option>
              <option value="1.375">Poca actividad</option>
              <option value="1.55">Actividad moderada</option>
              <option value="1.725">Actividad intensa</option>
              <option value="1.9">Atletas profesionales</option>
            </Form.Control>
          </Form.Group>
          <Button className="mt-2" type="submit" variant="btn btn-outline-dark">Calcular</Button>
        </Form>
        <h2 id="resultado">{resultado !== null ? "Las calorías que debes consumir para mantener el peso escrito es: " : ""}</h2>
        <h2 id="resultado">{resultado !== null ? resultado.toFixed(2) : ""}</h2>
      </div>
    </main>
  );
}

export default Calorias;