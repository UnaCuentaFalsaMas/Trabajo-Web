import { Link } from 'react-router-dom';

function Admin() {
  return (
    <div className="col-4" style={{ margin: '20px' }}>
      <div className="bg-white rounded-2x1" >
        <div style={{display:'flex'}}></div>
        <div className="card-body p-2">
            <h5 className="text-lg font-bold my-2">Crear nuevo administrador</h5>
            <Link to={'/crear'} className="btn btn-outline-dark">Ir a Crear</Link>
        </div>
        <div className="card-body p-2">
            <h5 className="text-lg font-bold my-2">Crear nuevo usuario</h5>
            <Link to={'/registro'} className="btn btn-outline-dark">Ir a Crear</Link>
        </div>
        <div className="card-body p-2">
            <h5 className="text-lg font-bold my-2">Eliminar cuenta</h5>
            <Link to={'/eliminar'} className="btn btn-outline-dark">Ir a Eliminar</Link>
        </div>
        <div className="card-body p-2">
            <h5 className="text-lg font-bold my-2">Editar cuenta</h5>
            <Link to={'/editar'} className="btn btn-outline-dark">Ir a Editar</Link>
        </div>
      </div>
    </div>
  );
}

export default Admin;