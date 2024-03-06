import React from 'react';

const ChangePassword = () => {
  const validar = () => {
    // Aquí puedes incluir la lógica de validación si es necesario
    console.log('Lógica de validación...');
  };

  return (
    <div>
      <header>Tickets Now</header>
      <nav>
        <a href="login.html">Inicio</a>
      </nav>
      <main>
        <form>
          <p>Correo:</p>
          <input type="email" id="email" name="email" required />
          <p>Contraseña:</p>
          <input type="password" id="password" name="password" required />
          <p>Repetir Contraseña:</p>
          <input type="password" id="rep_password" name="password" required />
          <button className="signup-btn" onClick={validar}>Cambiar Contraseña</button>
        </form>
      </main>
      <footer>
        <p>Quito - Ecuador</p>
        <p>Kluius816@gmail.com</p>
      </footer>
      {/* Asegúrate de ajustar la ruta del script según la estructura de tu proyecto */}
      <script src="assets/javascript/rec_contra.js"></script>
    </div>
  );
};

export default ChangePassword;
