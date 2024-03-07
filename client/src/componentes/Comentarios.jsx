import React, { useState } from 'react';
import '../assets/css/comentarios.css';
const Comentario = ({ titulo, opinion, link }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{titulo}</h4>
        <p className="card-text">{opinion}</p>
        <a href={link} className="card-link">
          Enlace al evento
        </a>
      </div>
    </div>
  );
};
const ComentariosSection = () => {
  const [comentarios, setComentarios] = useState([]);
  const [nuevoComentario, setNuevoComentario] = useState({
    titulo: '',
    opinion: '',
    link: '',
  });
  const agregarComentario = () => {
    const nuevosComentarios = [...comentarios];
    nuevosComentarios.splice(1, 0, nuevoComentario); // Inserta el nuevo comentario después del segundo comentario
    setComentarios(nuevosComentarios);
    setNuevoComentario({ titulo: '', opinion: '', link: '' });
  };
  
  return (
    <section id="comentarios" className="mt-5">
      <div className="container">
        <h2 className="text-center">Comentario</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Ingresa un Comentario</h4>
                <form>
                  <div className="form-group">
                    <label htmlFor="titulo" style={{ color: 'black' }}>
                      Titulo:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="titulo"
                      value={nuevoComentario.titulo}
                      onChange={(e) =>
                        setNuevoComentario({
                          ...nuevoComentario,
                          titulo: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="opinion" style={{ color: 'black' }}>
                      Que opinas:
                    </label>
                    <textarea
                      className="form-control"
                      id="opinion"
                      value={nuevoComentario.opinion}
                      onChange={(e) =>
                        setNuevoComentario({
                          ...nuevoComentario,
                          opinion: e.target.value,
                        })
                      }
                      required
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="link" style={{ color: 'black' }}>
                      Añade la url del evento:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="link"
                      value={nuevoComentario.link}
                      onChange={(e) =>
                        setNuevoComentario({
                          ...nuevoComentario,
                          link: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={agregarComentario}
                  >
                    Agregar Comentario
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4" id="comentarios_lista">
          {comentarios.map((comentario, index) => (
            <Comentario key={index} {...comentario} />
          ))}
        </div>
      </div>
    </section>
  );
};
const Comentarios = () => {
  return (
    <div>
      <nav className='navegacion_web'>
        <a className='login_perfil' href="/Perfil_Usuario">Perfil</a>
        <a className='login_nosotros' href="/Inicio">Inicio</a>
        <a className='login_carrito' href="/Carrito">Carrito</a>
        <a className='login_nosotros' href="/Nosotros">Nosotros</a>
        <a className='login_cerrar' href="/">Cerrar</a>
      </nav>
      <section className="comentarios">
        <div className='container_Comentario'>
          <h2>Disfrutable</h2>
          <p>
            "POLICALIFA" en Los Ángeles, California, parece ser una experiencia
            musical única con un atractivo en el género country. La diversidad de
            artistas como "Pepe", "Nombre Genérico", "Pipas" y "Conejo Mañoso"
            promete ofrecer una variedad de estilos y enfoques dentro del mundo
            del country. Los eventos musicales no solo son oportunidades para
            disfrutar de la música, sino también para sumergirse en la atmósfera
            cultural que rodea a los artistas y a la ubicación en sí. Con Los
            Ángeles como telón de fondo, la combinación de la escena musical y el
            ambiente californiano seguramente creará una experiencia inolvidable
            para los asistentes. ¡Que viva la música y que POLICALIFA sea un
            éxito rotundo!
          </p>
          <nav>
            <a className='login_a' href="/Inicio" style={{ textDecoration: 'none' }}>Evento</a>
          </nav>
        </div>
      </section>
      <section className="comentarios">
        <div className='container_Comentario'>
          <h2>Excelente evento</h2>
          <p>
            La presencia de artistas reconocidos como "Pablo Casio" y la
            participación de talentos emergentes como "Libertin" y "Auror"
            aseguran una diversidad de estilos y perspectivas artísticas. Quito,
            con su rica historia y cultura, se convierte en un telón de fondo
            intrigante para este evento, fusionando lo contemporáneo con lo
            tradicional.
          </p>
          <nav>
            <a className='login_a' href="/Inicio" style={{ textDecoration: 'none' }}>Evento</a>
          </nav>
        </div>
      </section>
      <ComentariosSection />
    </div>
  );
};
export default Comentarios;
