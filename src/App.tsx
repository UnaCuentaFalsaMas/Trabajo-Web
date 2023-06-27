import { Routes, Route } from 'react-router-dom';
import Inicio from './paginas/Inicio';
import Acerca from './paginas/Acerca';
import Contacto from './paginas/Contacto';
import NotFound from './paginas/NotFound';
import Navbare from './componentes/Navbare';
import Pie from './componentes/Pie';
import Accerder from './paginas/Acceder';
import Registro from './paginas/Registro';
import Comidas from './paginas/Comidas';
import Calculadora from './paginas/Calculadora';
import Calorias from './paginas/Calorias';
import Ejercicios from './paginas/Ejercicios';
import Recetas from './paginas/Recetas';

function App() {
  return (
    <>
      <Navbare />

      <Routes>
        <Route path="/accedio" element={<Inicio />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/" element={<Accerder />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/comidas" element={<Comidas />} />
        <Route path="/calculadora" element={<Calculadora />} />
        <Route path="/calorias" element={<Calorias />} />
        <Route path="/ejercicios" element={<Ejercicios />} />
        <Route path="/recetas" element={<Recetas />} />
      </Routes>
      <Pie />
    </>
  );
}

export default App;
