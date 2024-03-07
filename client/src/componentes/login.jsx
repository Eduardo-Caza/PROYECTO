import React, { useState } from 'react';
import '../assets/css/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/imagenes/Tickets.png';
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


function Login() {
  const [email, setEmail] = useState('');
  const [contra, setContra] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/login', {
        email,
        contra
      });

      if (response.data === 'success') {
        // Redireccionar a la siguiente página
        window.location.href = '/Inicio';
      } else {
        MySwal.fire({
          title: <strong>Equivocado!!</strong>,
          html: <i>Usuario o Contraseña Incorrectos!!</i>,
          icon: 'error',
          timer: 3000,
        })
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setError('Error al iniciar sesión. Por favor, intenta de nuevo más tarde.');
    }
  };

  return (
    <div className='body'>
      <div className="container_login">
        <div className="row" style={{ justifyContent: 'center' }}>
          <div>
            <img className="imagen_evento" src={Logo} alt="Festival de Musica" />
            <h2 className='h2_login'>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Correo electrónico:</label>
              <input
                placeholder="Correo electrónico"
                type="email"
                id="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password">Contraseña:</label>
              <input
                placeholder="Contraseña"
                type="password"
                id="password"
                name="password"
                required
                value={contra}
                onChange={(e) => setContra(e.target.value)}
              />
              <div className="forgot-password">
                <a href="/Rec_Contraseña">
                  ¿Olvidaste la contraseña?
                </a>
              </div>
              {error && <div className="error-message">{error}</div>}
              <br />
              <div className="actions" style={{ textAlign: 'center', justifyContent: 'space-between' }}>
                <button className="login_iniciar" type="submit">Iniciar Sesión</button>
                <a className="login_crear" href='/Crear_cuenta'>Crear Cuenta</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
