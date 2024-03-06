import React from 'react';
import '../assets/css/historial.css';

const Comentarios = () => {
  return (
    <>
    <nav className='navegacion_web'>
        <a className='login_a' href="/Nosotros">Nosotros</a>
        <a className='login_a' href="/Perfil_Usuario">Perfil</a>
        <a className='login_a' href="/">Cerrar sesion</a>
      </nav>
      <section className="comentarios">
        <div className='container_historial'>
          <h2>POOLICALIFA</h2>
          <h3>Comentario</h3>
          <h3>Calificacion: 4.2</h3>
          <p>POLICALIFA" en Los Ángeles, California,
            parece ser una experiencia musical única
            con un atractivo en el género country.
            La diversidad de artistas como "Pepe",
            "Nombre Genérico", "Pipas" y "Conejo Mañoso"
            promete ofrecer una variedad de estilos y enfoques dentro del mundo del country. Los eventos musicales no solo son oportunidades para disfrutar de la música, sino también para sumergirse en la atmósfera cultural que rodea a los artistas y a la ubicación en sí. Con Los Ángeles como telón de fondo, la combinación de la escena musical y el ambiente californiano seguramente creará una experiencia inolvidable para los asistentes. ¡Que viva la música
            y que POLICALIFA sea un éxito rotundo!</p>
          <nav>
          <a className='historial_a' href="/Inicio">Evento</a>
          </nav>
        </div>
      </section>
      <section className="comentarios">
        <div className='container_historial'>
          <h2>El Pixel</h2>
          <h3>Comentario</h3>
          <h3>Calificacion: 4.2</h3>
          <p>La presencia de artistas
            reconocidos como "Pablo Casio" y la
            participación de talentos emergentes
            como "Libertin" y "Auror" aseguran una
            diversidad de estilos y perspectivas
            artísticas. Quito, con su rica historia y
            cultura, se convierte en un telón de fondo
            intrigante para este evento, fusionando lo
            contemporáneo con lo tradicional.</p>
          <nav>
          <a className='historial_a' href="/Inicio">Evento</a>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Comentarios;
