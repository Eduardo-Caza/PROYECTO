import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import '../assets/css/inicio.css';
import Foto from '../assets/imagenes/festivalmusica.jpg';

function Inicio() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/evento');
        setEventos(response.data);
      } catch (error) {
        console.error('Error al obtener eventos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <nav className='navegacion_web'>
        <a className='login_perfil' href="/Perfil_Usuario">Perfil</a>
        <a className='login_carrito' href="/Carrito">Carrito</a>
        <a className='login_nosotros' href="/Nosotros">Nosotros</a>
        <a className='login_cerrar' href="/">Cerrar</a>
      </nav>
      <section>
        {eventos.map(evento => (
          <div className="container_inicio" key={evento.idevento}>
            <h1 className="display-4">{evento.titulo}</h1>
            <h3>Costo: {evento.valor}</h3>
            <h3>Anfitrión: {evento.anfitrion}</h3>
            <h3>Capacidad: {evento.capacidad}</h3>
            <hr className="my-4" />
            <h3 className="text-center">Descripción</h3>
            <p>{evento.descripcion}</p>
            <hr className="my-4" />
            <img className="imagen_evento" src={Foto} alt={evento.titulo} />
            <hr className="my-4" />
            <nav className='navegacion_eventos'>
              <a className='btn btn-primary mr-2' href="/Carrito">Añadir al carrito</a>
              <a className='btn btn-secondary' href="/Comentarios">Comentarios</a>
            </nav>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Inicio;
