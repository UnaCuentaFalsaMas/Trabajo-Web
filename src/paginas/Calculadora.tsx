import { Button, Form } from "react-bootstrap";
import { useState } from "react";

function calcularImc(altura: number, peso: number) {
  return peso / (altura * altura);
}

function Calculadora() {
  const [resultado, setResultado] = useState<number | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const altura = parseFloat((document.getElementById("altura") as HTMLInputElement).value);
    const peso = parseFloat((document.getElementById("peso") as HTMLInputElement).value);
    const imc = calcularImc(altura, peso);
    setResultado(imc);
  }

  return (
    <main>
      <div className="flex-conteiner text-center">
        <h1>Calculadora</h1>
        <Form className="container p-3" onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Altura</Form.Label>
            <Form.Control
              required
              type="number"
              id="altura"
              name="altura"
              placeholder="1.80 mt"
              step={0.01}
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
            />
          </Form.Group>
          <Button className="mt-2" type="submit" variant="primary">
            Calcular
          </Button>
        </Form>
        <h2 id="resultado">{resultado !== null ? resultado.toFixed(2) : ""}</h2>
      </div>
    </main>
  );
}

export default Calculadora;
