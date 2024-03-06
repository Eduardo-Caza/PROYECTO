import React from 'react';
import '../assets/css/login.css';
import Logo from '../assets/imagenes/Tickets.png'
function login() {
  return (
    <div className="container_login">
      <div className="row" style={{ justifyContent: 'center' }}>
        <div>
          <img className="imagen_evento" src={Logo} alt="Festival de Musica" />
          <h2>Iniciar Sesión</h2>
          <form>
            <label htmlFor="username">Usuario:</label>
            <input placeholder="Usuario Generico" type="text" id="username" name="username"/>
            <label htmlFor="password">Contraseña:</label>
            <input placeholder="Tickets_Now_123" type="password" id="password" name="password"/>
            <div className="forgot-password">
              <a href="/Rec_Contraseña">
                ¿Olvidaste la contraseña?
              </a>
            </div>
            <br></br>
            <div className="actions" style={{ textAlign: 'center', justifyContent: 'space-between'}}>
              <a className="Botones" href='/Inicio'>Iniciar Sesion</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default login;