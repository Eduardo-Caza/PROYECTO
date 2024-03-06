import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from './componentes/Inicio';
import Ingreso from './componentes/login';
import Nosotros from './componentes/Nosotros';
import Carrito from './componentes/Carrito';
import Comentarios from './componentes/Comentarios';
import Historial from './componentes/Historial';
import Perfil_Usuario from './componentes/Perfil_Usuario';
import Rec_Contraseña from './componentes/Rec_Contraseña';
import Administrador from './componentes/CRUD_Empleados';
import Crear_cuenta from './componentes/crear_cuenta';
function App() {
  return (
    <Router>
      <div>
      <Routes>
          <Route path="/" element={<Ingreso />} />
          <Route path="/*" element={<Ingreso />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Carrito" element={<Carrito />} />
          <Route path="/Comentarios" element={<Comentarios />} />
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/Historial" element={<Historial />} />
          <Route path="/Perfil_Usuario" element={<Perfil_Usuario />} />
          <Route path="/Rec_Contraseña" element={<Rec_Contraseña />} />
          <Route path="/Administrador" element={<Administrador />} />
          <Route path="/Crear_cuenta" element={<Crear_cuenta />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
