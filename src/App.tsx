import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Inicio from './paginas/Inicio'
import Acerca from './paginas/Acerca'
import Contacto from './paginas/Contacto'
import NotFound from './paginas/NotFound'
import Navbare from './componentes/Navbare'
import Pie from './componentes/Pie'
import Accerder from './paginas/Acceder'
import Registro from './paginas/Registro'
function App() {

return (
<>
<Navbare/>

<Routes>
<Route path="/" element={<Inicio />} />
<Route path="/acerca" element={<Acerca />} /> 
<Route path="/contacto" element={<Contacto />} />
<Route path="/acceder" element={<Accerder />} />
<Route path="*" element={<NotFound />} />
<Route path="/registro" element={<Registro />} />
</Routes>
<Pie />
</>

)

}

export default App
