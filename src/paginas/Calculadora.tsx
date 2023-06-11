import { Button, Form } from "react-bootstrap";
import { useState } from "react";

function calcularImc(altura: number, peso: number) {
  altura = altura / 100;
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
              placeholder="180 cm"
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
              max={600}
            />
          </Form.Group>
          <Button className="mt-2" type="submit" variant="btn btn-outline-dark">Calcular</Button>
        </Form>
        
        <h2 id="resultado">
          {resultado !== null && resultado < 18.5 ? 'Tu indice de masa corporal es: ' : ""}
          {resultado !== null && resultado < 18.5 ? resultado.toFixed(2) : ""}
          {resultado !== null && resultado < 18.5 ? <div><br /><img src="./src/assets/img/bajo peso.png" alt="" /></div> : ""}

          {resultado !== null && resultado >= 18.5 && resultado < 25 ? 'Tu indice de masa corporal es: ' : ""}
          {resultado !== null && resultado >= 18.5 && resultado < 25 ? resultado.toFixed(2) : ""}
          {resultado !== null && resultado >= 18.5 && resultado < 25 ? <div><br /><img src="./src/assets/img/saludable.png" alt="" /></div> : ""}

          {resultado !== null && resultado >= 25 && resultado < 30 ? 'Tu indice de masa corporal es: ' : ""}
          {resultado !== null && resultado >= 25  && resultado < 30 ? resultado.toFixed(2) : ""}
          {resultado !== null && resultado >= 25  && resultado < 30 ? <div><br /><img src="./src/assets/img/sobrepeso.png" alt="" /></div> : ""}

          {resultado !== null && resultado >= 30 && resultado < 40 ? 'Tu indice de masa corporal es: ' : ""}
          {resultado !== null && resultado >= 30 && resultado < 40 ? resultado.toFixed(2) : ""}
          {resultado !== null && resultado >= 30 && resultado < 40 ? <div><br /><img src="./src/assets/img/obesidad.png" alt="" /></div> : ""}

          {resultado !== null && resultado > 40 ? 'Tu indice de masa corporal es: ' : ""}
          {resultado !== null && resultado > 40 ? resultado.toFixed(2) : ""}
          {resultado !== null && resultado > 40 ? <div><br /><img src="./src/assets/img/obesidad severa.png" alt="" /></div> : ""}
        </h2>
      </div>
    </main>
  );
}

export default Calculadora;
