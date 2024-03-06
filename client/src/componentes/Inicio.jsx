import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Imagen1 from '../assets/imagenes/atre.jpg';
import Imagen2 from '../assets/imagenes/festivalmusica.jpg';
import '../assets/css/inicio.css'

function Inicio() {
  return (
    <div>
      <nav className='navegacion_web'>
        <a className='login_perfil' href="/Perfil_Usuario">Perfil</a>
        <a className='login_carrito' href="/Carrito">Carrito</a>
        <a className='login_nosotros' href="/Nosotros">Nosotros</a>
        <a className='login_cerrar' href="/">Cerrar</a>
      </nav>
      <section>
        <div className="container_inicio">
          <h1 className="display-4">POLICALIFA</h1>
          <h3>Ubicacion: Los Angeles</h3>
          <h3>Etiquetas: Musica, Festival Fiestas</h3>
          <hr className="my-4" />
          <h3 className="text-center">Descripcion</h3>
          <p>
            Policalifa es mucho más que un simple festival;
            es una celebración de la riqueza cultural que nos une.
            Experimenta la magia de la música en vivo con actuaciones
            de artistas de renombre internacional que exploran y
            mezclan géneros, creando una banda sonora única para nuestra fusión cultural.</p>
          <p>Fecha y lugar: 3 de marzo a las 4 de la tarde</p>
          <hr className="my-4" />
          <img className="imagen_evento" src={Imagen1} alt="Festival de Musica" />
          <hr className="my-4" />
          <nav className='navegacion_eventos'>
            <a className='btn btn-primary mr-2' href="/Carrito">Añadir al carrito</a>
            <a className='btn btn-secondary' href="/Comentarios">Comentarios</a>
          </nav>
        </div>
      </section>
      <section>
        <div className="container_inicio">
          <h1 className="display-4">LA ENCONTRADA</h1>
          <h3>Ubicacion: La Piedra</h3>
          <h3>Etiquetas: Chupe y Farra</h3>
          <hr className="my-4" />
          <h3 className="text-center">Descripcion</h3>
          <p>
            "La Encontrada" es un vibrante y emocionante evento de
            fiesta que promete sumergirte en una experiencia única llena
            de alegría, música y diversión sin igual. Este espectáculo
            excepcional reúne a personas apasionadas de todas partes
            para celebrar la vida y la energía positiva en un ambiente festivo.</p>
          <hr className="my-4" />
          <img className="imagen_evento" src={Imagen2} alt="Festival de Musica" />
          <hr className="my-4" />
          <nav className='navegacion_eventos'>
            <a className='btn btn-primary mr-2' href="/Carrito">Añadir al carrito</a>
            <a className='btn btn-secondary' href="/Comentarios">Comentarios</a>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default Inicio;
