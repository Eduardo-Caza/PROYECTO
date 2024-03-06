import { useState } from 'react';
import Axios from "axios";
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

function App() {

    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState();
    const [correo, setCorreo] = useState("");
    const [clave, setClave] = useState("");
    const [telefono, setTelefono] = useState();
    const [idempleados, setIdempleados] = useState();

    const [editar, setEditar] = useState(false);

    const [empleadosList, setEmpleados] = useState([]);

    const add = () => {
        Axios.post("http://localhost:3001/create", {
            nombre: nombre,
            edad: edad,
            correo: correo,
            clave: clave,
            telefono: telefono
        }).then(() => {
            getEmpleados();
            limpiarCampos();
            MySwal.fire({
                title: <strong>Registro Exitoso!!</strong>,
                html: <i>El usuario <strong>{nombre}</strong> fue registrado con exito!!</i>,
                icon: 'success',
                timer: 3000,
            })
        });
    }

    const update = () => {
        Axios.put("http://localhost:3001/update", {
            idempleados: idempleados,
            nombre: nombre,
            edad: edad,
            correo: correo,
            clave: clave,
            telefono: telefono
        }).then(() => {
            getEmpleados();
            limpiarCampos();
            MySwal.fire({
                title: <strong>Actualizacion Exitosa!!</strong>,
                html: <i>Los datos de <strong>{nombre}</strong> se actualizaron con exito!!</i>,
                icon: 'success',
                timer: 3000,
            })
        });
    }
    const limpiarCampos = () => {
        setEdad("");
        setNombre("");
        setCorreo("");
        setClave("");
        setTelefono("");
        setEditar(false);
        MySwal.fire({
            title: <strong>Cancelado!!</strong>,
            html: <i>Se cancelo la actualizacion de datos!!</i>,
            icon: 'info',
            timer: 3000,
        })
    }

    const getEmpleados = () => {
        Axios.get("http://localhost:3001/empleados").then((response) => {
            setEmpleados(response.data);
        });
    }


    useEffect(() => {
        // Llamar a getEmpleados solo una vez cuando el componente se monte
        getEmpleados();
    }, []);

    return (
        <div className="container_crud">

            <div className="card text-center">
                <div className="card-header">
                    CREAR CUENTA
                </div>
                <div className="card-body">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Nombre: </span>
                        <input type="text" value={nombre}
                            onChange={(event) => {
                                setNombre(event.target.value);
                            }}
                            className="form-control" placeholder="Ingrese un nombre" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Edad: </span>
                        <input type="number" value={edad}
                            onChange={(event) => {
                                setEdad(event.target.value);
                            }}
                            className="form-control" placeholder="Ingrese una edad" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Correo: </span>
                        <input type="text" value={correo}
                            onChange={(event) => {
                                setCorreo(event.target.value);
                            }}
                            className="form-control" placeholder="Ingrese un correo" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Clave: </span>
                        <input type="password" value={clave}
                            onChange={(event) => {
                                setClave(event.target.value);
                            }}
                            className="form-control" placeholder="Ingrese una contraseña" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Telefono: </span>
                        <input type="number" value={telefono}
                            onChange={(event) => {
                                setTelefono(event.target.value);
                            }}
                            className="form-control" placeholder="Numero de contacto" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                </div>
                <div className="card-footer text-muted">
                    {
                        editar ?
                            <div>
                                <button className='btn btn-warning m-2' onClick={update}>Actualizar</button>
                                <button className='btn btn-info m-2' onClick={limpiarCampos}>Cancelar</button>
                            </div>
                            :
                            <button className='btn btn-success' onClick={add}>Registrar</button>
                    }
                </div>
                <a className='login_crear2' href="/">Regresar</a>
            </div>
        </div>
    );
}
export default App;
