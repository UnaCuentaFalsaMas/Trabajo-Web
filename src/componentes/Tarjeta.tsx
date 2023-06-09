type Nutrientes = {
  ENERC_KCAL: number;
  PROCNT: number;
  FAT: number;
  CHOCDF: number;
};

type Alimento = {
  foodId: string;
  label: string;
  knowAs: string;
  nutrients: Nutrientes;
};

type TarjetaProps = {
  alimento: Alimento;
};

const Tarjeta = ({ alimento }: TarjetaProps) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{alimento.label}</h5>
        <p className="card-text">Energía: {alimento.nutrients.ENERC_KCAL}</p>
        <p className="card-text">Proteína: {alimento.nutrients.PROCNT}</p>
        <p className="card-text">Grasa: {alimento.nutrients.FAT}</p>
        <p className="card-text">Carbohidratos: {alimento.nutrients.CHOCDF}</p>
      </div>
    </div>
  );
};

export default Tarjeta;
