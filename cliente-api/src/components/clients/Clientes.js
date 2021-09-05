import React, { useEffect, useState, Fragment } from 'react';
import { Link } from "react-router-dom";


// importar cliente axios 
import clienteAxios from '../../config/axios';
import Cliente from '../clients/Cliente';

function Clientes() {

    // trabajar con el state
    // clientes = state, guardarClietne = funcion para guardar el state
    const [ clientes, guardarClientes ] = useState([]);

    // query al api
    const consultarAPI = async () => {
        const clientesConsulta = await clienteAxios.get('/clientes');
        
        // colocar el resultado en el state
        guardarClientes(clientesConsulta.data);
    }

    // use effect es similar a componentedidmount
    useEffect( () => {
        consultarAPI();
    }, [clientes]);

    return (
        <Fragment>
            <h2>Clientes</h2>
            
            <Link to={"/cliente/nuevo"} className="btn btn-verde nvo-cliente"> <i className="fas fa-plus-circle"></i>
                Nuevo Cliente
            </Link>

            <ul className="listado-clientes">
                {clientes.map(cliente => (
                    <Cliente 
                        key = {cliente._id}
                        cliente = {cliente}
                    />
                ))}
            </ul>
        </Fragment>
    )
}
export default Clientes;