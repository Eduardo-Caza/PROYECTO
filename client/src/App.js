import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Clientes from './componentes/CRUD_Empleados';
function App() {
  return (
    <Router>
      <div>
      <Routes>
          <Route path="/" element={<Clientes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;