import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import '../assets/css/inicio.css';
import Foto from '../assets/imagenes/festivalmusica.jpg';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const Evento = ({ evento }) => {
  const handleCompraClick = () => {
    MySwal.fire({
      title: <strong>Compra realizada!</strong>,
      text: 'Su compra ha sido realizada con éxito.',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      timer:2500,
    });
  };

  const handleComentariosClick = () => {
    window.location.href = "/Comentarios";
  };

  return (
    <div className="row my-4">
      <div className="col-md-6" id="col1">
        <h1 className="display-4">{evento.titulo}</h1>
        <h3>Precio: {evento.valor || evento.anfitrion}</h3>
        <h3>Capacidad: {evento.capacidad}</h3>
        <hr className="my-4" />
        <h3 className="text-center">Descripción</h3>
        <p>{evento.descripcion}</p>
      </div>
      <div className="col-md-6" id="col2">
        <div className="d-flex flex-column justify-content-between h-100">
          <div>
            <img className="img-fluid" src={Foto} alt={evento.titulo} />
          </div>
          <div className="mt-3">
            <div>
              <button className='btn btn-warning m-2' onClick={handleCompraClick}>Comprar</button>
              <button className='btn btn-info m-2' onClick={handleComentariosClick}>Comentarios</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [eventos1, setEventos1] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get('http://localhost:3001/eventos');
        setEventos1(response1.data);
      } catch (error) {
        console.error('Error al obtener eventos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <nav className='navegacion_web'>
        <a className='login_perfil' href="/Perfil_Usuario">Perfil</a>
        <a className='login_nosotros' href="/Inicio">Inicio</a>
        <a className='login_carrito' href="/Carrito">Carrito</a>
        <a className='login_nosotros' href="/Nosotros">Nosotros</a>
        <a className='login_cerrar' href="/">Cerrar</a>
      </nav>
      <div className="container_inicio">
        <section>
          <h2>Eventos Disponibles para Reservar</h2>
          {eventos1.map(evento => (
            <Evento key={evento.idevento} evento={evento} />
          ))}
        </section>
        <hr className="my-4" />
      </div>
    </>
  );
};

export default App;
