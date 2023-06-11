import { Link } from 'react-router-dom';

interface Variables {
  img: string;
  titulo: string;
  texto: string;
  link: string;
}

function ACC({ img, titulo, texto, link }: Variables) {
  return (
    <div className="col-4" style={{ margin: '20px' }}>
      <div className="bg-white rounded-2x1" >
        <div style={{display:'flex'}}>
        <img src={img} className= "img-fluid" alt="..." />
        </div>
        
        <div className="card-body p-2">
            <h5 className="text-lg font-bold my-2">{titulo}</h5>
            <p className="card-text">{texto}</p>
            <Link to={link} className="btn btn-outline-dark">Ir a {titulo}</Link>
      </div>
    </div>
    </div>
    
  );
}
export default ACC;
