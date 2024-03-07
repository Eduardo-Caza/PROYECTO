import React, { useState, useEffect } from 'react';
import Foto from '../assets/imagenes/fotoperfil.jpeg';
import '../assets/css/perfil.css';
const PerfilUsuario = () => {
  return (
    <div>
      <nav className='navegacion_web'>
        <a className='login_perfil' href="/Perfil_Usuario">Perfil</a>
        <a className='login_nosotros' href="/Inicio">Inicio</a>
        <a className='login_carrito' href="/Carrito">Carrito</a>
        <a className='login_nosotros' href="/Nosotros">Nosotros</a>
        <a className='login_cerrar' href="/">Cerrar</a>
      </nav>
      <main>
        <div className="container_perfil">
          <div className="row">
            <div className="col-md-6" id="col1">
              <h1 className="display-4">Perfil de Usuario</h1>
              <img className="img-fluid imagen_usuario" src={Foto} alt="Foto perfil" />
              <h1 className="text-center">Kairos</h1>
              <p className="text-center">Comentarios realizados: 37</p>
              <hr />
              <h1>Gustos</h1>
              <ul className="list-group">
                <li className="list-group-item">Musica</li>
                <li className="list-group-item">Arte</li>
                <li className="list-group-item">Terror</li>
                <li className="list-group-item">Comicon</li>
              </ul>
              <hr />
              <h1>Ultimos eventos</h1>
              <ul className="list-group">
                <li className="list-group-item">POLICALIFA</li>
                <li className="list-group-item">EL PIXEL</li>
              </ul>
              <hr />
            </div>
            <div className="col-md-6" id="col2">
              <h1>Correo</h1>
              <p>ejemplo@correo.com</p>
              <hr />
              <h1>Nombre</h1>
              <p>Pepe Garcia</p>
              <hr />
              <h1>Eventos Asistidos</h1>
              <p>Dos eventos asistidos hasta ahora</p>
              <hr />
              <h1>Calificaciones de eventos</h1>
              <p>Tu promedio de calificación es de 4.3 de 5</p>
              <hr />
              <h1>Ubicaciones preferidas</h1>
              <ul className="list-group">
                <li className="list-group-item">Cumbaya</li>
                <li className="list-group-item">Quito</li>
                <li className="list-group-item">Cuenca</li>
              </ul>
              <br />
              <nav>
                <a className='perfil_a' href="/Historial">Historial</a>
              </nav>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PerfilUsuario;
