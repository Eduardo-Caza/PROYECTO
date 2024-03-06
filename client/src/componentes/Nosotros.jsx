import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Nosotros() {
    return (
        <>
            <nav className='navegacion_web'>
                <a className='login_perfil' href="/Perfil_Usuario">Perfil</a>
                <a className='login_carrito' href="/Carrito">Carrito</a>
                <a className='login_nosotros' href="/Nosotros">Nosotros</a>
                <a className='login_cerrar' href="/">Cerrar</a>
            </nav>
            <div className="container">
                <section className="mt-5">
                    <h1>Tickets Now</h1>
                    <p>
                        Tickets Now es tu destino principal para la gestión de eventos de principio a fin.
                        Ya sea que estés organizando un concierto, una conferencia, una boda o cualquier otro tipo de evento,
                        nuestro servicio te ofrece todas las herramientas que necesitas para asegurar un éxito sin igual.
                    </p>
                    <p>
                        Con Tickets Now, puedes crear y personalizar fácilmente eventos,
                        desde la venta de entradas hasta la coordinación logística.
                        Nuestra plataforma intuitiva te permite establecer precios,
                        gestionar la disponibilidad de entradas y promocionar tu evento de manera efectiva.
                    </p>
                    <p>
                        Además, ofrecemos a los asistentes una experiencia impecable al comprar boletos en línea.
                        Con un proceso de compra seguro y fácil de usar,
                        garantizamos transacciones sin complicaciones para que tus clientes estén
                        emocionados desde el momento en que adquieren sus entradas.
                    </p>
                    <p>
                        La tecnología avanzada de Tickets Now también incluye herramientas de seguimiento de asistentes,
                        permitiéndote conocer mejor a tu audiencia y optimizar futuros eventos.
                        Nuestra plataforma es escalable y adaptable a las necesidades de cualquier evento,
                        ya sea pequeño o masivo.
                    </p>
                    <p>
                        Tickets Now es la solución integral para la gestión de eventos que te
                        brinda la libertad de enfocarte en la creación de experiencias inolvidables,
                        mientras nosotros nos encargamos de los detalles logísticos.
                        ¡Haz de tu próximo evento un éxito memorable con Tickets Now!
                    </p>
                    <a href="/Inicio" className="btn btn-primary mt-3">Regresar</a>
                </section>
            </div>
        </>
    );
}

export default Nosotros;
