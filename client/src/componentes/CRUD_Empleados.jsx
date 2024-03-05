import '../App.css';
import { useState } from 'react';
import Axios from "axios";
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

function CRUD_Empleados() {

    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState();
    const [pais, setPais] = useState("");
    const [cargo, setCargo] = useState("");
    const [anios, setAnios] = useState();
    const [idempleados, setIdempleados] = useState();

    const [editar, setEditar] = useState(false);

    const [empleadosList, setEmpleados] = useState([]);

    const add = () => {
        Axios.post("http://localhost:3001/create", {
            nombre: nombre,
            edad: edad,
            pais: pais,
            cargo: cargo,
            anios: anios
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
            pais: pais,
            cargo: cargo,
            anios: anios
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

    const deleteEmpleado = (idempleados) => {
        Axios.delete(`http://localhost:3001/delete/${idempleados}`).then(() => {
            getEmpleados();
            limpiarCampos();
            MySwal.fire({
                title: <strong>Eliminacion Exitosa!!</strong>,
                html: <i>Los datos de <strong>{nombre}</strong> se eliminaron con exito!!</i>,
                icon: 'warning',
                timer: 3000,
            })
        });
    }

    const limpiarCampos = () => {
        setAnios("");
        setNombre("");
        setPais("");
        setCargo("");
        setEdad("");
        setEditar(false);
        MySwal.fire({
            title: <strong>Cancelado!!</strong>,
            html: <i>Se cancelo la actualizacion de datos!!</i>,
            icon: 'info',
            timer: 3000,
        })
    }

    const editarEmpleado = (val) => {
        setEditar(true);

        setNombre(val.nombre);
        setEdad(val.edad);
        setCargo(val.cargo);
        setPais(val.pais);
        setAnios(val.anios);
        setIdempleados(val.idempleados);

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
        <div className="container">

            <div className="card text-center">
                <div className="card-header">
                    GESTION DE USUARIOS
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
                        <span className="input-group-text" id="basic-addon1">Pais: </span>
                        <input type="text" value={pais}
                            onChange={(event) => {
                                setPais(event.target.value);
                            }}
                            className="form-control" placeholder="Ingrese un pais" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Cargo: </span>
                        <input type="text" value={cargo}
                            onChange={(event) => {
                                setCargo(event.target.value);
                            }}
                            className="form-control" placeholder="Ingrese un cargo" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Años: </span>
                        <input type="number" value={anios}
                            onChange={(event) => {
                                setAnios(event.target.value);
                            }}
                            className="form-control" placeholder="Años de Experiencia" aria-label="Username" aria-describedby="basic-addon1" />
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
            </div>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Pais</th>
                        <th scope="col">Cargo</th>
                        <th scope="col">Experiencia</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        empleadosList.map((val, key) => {
                            return <tr key={val.idempleados}>
                                <th scope="row">{val.idempleados}</th>
                                <td>{val.nombre}</td>
                                <td>{val.edad}</td>
                                <td>{val.pais}</td>
                                <td>{val.cargo}</td>
                                <td>{val.anios}</td>
                                <td>
                                    <div className="btn-group" role="group" aria-label="Basic example">
                                        <button type="button"
                                            onClick={() => {
                                                editarEmpleado(val)
                                            }}
                                            className="btn btn-info">Editar</button>
                                        <button type="button" onClick={() => {
                                            deleteEmpleado(val.idempleados);
                                        }} className="btn btn-danger">Eliminar</button>
                                    </div>
                                </td>
                            </tr>
                        })
                    }


                </tbody>
            </table>

        </div>
    );
}

export default CRUD_Empleados;
