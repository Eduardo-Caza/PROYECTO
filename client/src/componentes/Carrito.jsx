import React from 'react';
import imagen2 from '../assets/imagenes/festivalmusica.jpg'
import '../assets/css/inicio.css';
const Evento = ({ nombre, ubicacion, etiquetas, descripcion, imagenSrc }) => {
  return (
    <div className="row my-4">
      <div className="col-md-6" id="col1">
        <h1 className="display-4">{nombre}</h1>
        <h3>Ubicacion: {ubicacion}</h3>
        <h3>Etiquetas: {etiquetas}</h3>
        <hr className="my-4" />
        <h3 className="text-center">Descripcion</h3>
        <p>{descripcion}</p>
      </div>
      <div className="col-md-6" id="col2">
        <hr className="my-4" />
        <img className="img-fluid" src={imagen2} alt={nombre} />
        <nav className="mt-3">
          <a className="btn btn-primary mr-2" href="">Comprar</a>
          <a className="btn btn-secondary" href="/Comentarios">Comentarios</a>
        </nav>
        <hr className="my-4" />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <>
      <nav className='navegacion_web'>
        <a className='login_perfil' href="/Perfil_Usuario">Perfil</a>
        <a className='login_carrito' href="/Carrito">Carrito</a>
        <a className='login_nosotros' href="/Nosotros">Nosotros</a>
        <a className='login_cerrar' href="/">Cerrar</a>
      </nav>
      <div className="container_inicio">
        <section>
          <Evento
            nombre="POLICALIFA"
            ubicacion="Los Angeles"
            etiquetas="Musica, Festival, Fiestas"
            descripcion="Festival de musica con artistas de talla mundial como El conejo mañoso"
            imagenSrc="assets/imagenes/festivalmusica.jpg"
          />
        </section>
        <hr className="my-4" />
        <section>
          <Evento
            nombre="El pixel"
            ubicacion="Quito"
            etiquetas="Musica, Festival, Fiestas"
            descripcion="Festival de art con artistas de talla mundial como Pablo Cassio"
            imagenSrc="assets/imagenes/festovalmusica.jpg"
          />
        </section>
      </div>
      <br/>
    </>
  );
};

export default App;
