import React from 'react';
import '../assets/css/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/imagenes/Tickets.png'
function login() {
  return (
    <div className='body'>
    <div className="container_login">
      <div className="row" style={{ justifyContent: 'center' }}>
        <div>
          <img className="imagen_evento" src={Logo} alt="Festival de Musica" />
          <h2 className='h2_login'>Iniciar Sesión</h2>
          <form>
            <label htmlFor="username">Usuario:</label>
            <input placeholder="Usuario Generico" type="text" id="username" name="username" required/>
            <label htmlFor="password">Contraseña:</label>
            <input placeholder="Tickets_Now_123" type="password" id="password" name="password" required/>
            <div className="forgot-password">
              <a href="/Rec_Contraseña">
                ¿Olvidaste la contraseña?
              </a>
            </div>
            <br></br>
            <div className="actions" style={{ textAlign: 'center', justifyContent: 'space-between'}}>
              <a className="login_iniciar" href='/Inicio'>Iniciar Sesion</a>
              <a className="login_crear" href='/Crear_cuenta'>Crear Cuenta</a>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default login;