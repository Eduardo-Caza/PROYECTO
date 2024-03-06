import React, { useState, useEffect } from 'react';
import Foto from '../assets/imagenes/fotoperfil.jpeg';
import '../assets/css/perfil.css';
const PerfilUsuario = () => {
  return (
    <div>
      <nav className='navegacion_web'>
        <a className='login_perfil' href="/Perfil_Usuario">Perfil</a>
        <a className='login_carrito' href="/Carrito">Carrito</a>
        <a className='login_nosotros' href="/Nosotros">Nosotros</a>
        <a className='login_cerrar' href="/">Cerrar</a>
      </nav>
      <main>
        <div className="container_perfil">
          <div className="row">
            <div className="col-md-6" id="col1">
              <h1>Perfil de Usuario</h1>
              <img className="imagen_usuario" src={Foto} alt="Foto perfil" />
              <h1 align="center">Kairos</h1>
              <p align="center">Comentarios realizados: 37</p>
              <hr></hr>
              <h1>Gustos</h1>
              <ul>
                <li>Musica</li>
                <li>Arte</li>
                <li>Terror</li>
                <li>Comicon</li>
              </ul>
              <hr></hr>
              <h1>Ultimos eventos</h1>
              <ul>
                <li>POLICALIFA</li>
                <li>EL PIXEL</li>
              </ul>
              <hr></hr>
            </div>
            <div className="col-md-6" id="col2">
              <h1>Correo</h1>
              <p>ejemplo@correo.com</p>
              <hr></hr>
              <h1>Nombre</h1>
              <p>Pepe Garcia</p>
              <hr></hr>
              <h1>Eventos Asistidos</h1>
              <p>Dos eventos asistidos hasta ahora</p>
              <hr></hr>
              <h1>Calificaciones de eventos</h1>
              <p>Tu promedio de calificación es de 4.3 de 5</p>
              <hr></hr>
              <h1>Ubicaciones preferidas</h1>
              <ul>
                <li>Cumbaya</li>
                <li>Quito</li>
                <li>Cuenca</li>
              </ul>
              <br></br>
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
