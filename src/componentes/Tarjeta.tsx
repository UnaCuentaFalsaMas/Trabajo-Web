import { Link } from 'react-router-dom';
function Tarjeta({ img, titulo, texto, link }) {
  return (
    <div className="bg-white ronded-2x1">
      <img src={img} className= "ronded-md w-1/4" alt="..." />
      <div className="card-body p-12">
        <h5 className="text-lg font-bold my-2">{titulo}</h5>
        <p className="card-text">{texto}</p>
        <Link to={link} className="btn btn-primary">
          Ir a {titulo}
        </Link>
      </div>
    </div>
  );
}
export default Tarjeta;
