import React, {useEffect, useState, Fragment} from 'react';
import { Link } from 'react-router-dom';
import clienteAxios from '../../config/axios';
import Producto from './producto';

const Productos = () => {

    // productos = state
    const [productos, guardarProductos] = useState([]);

    // useEffect para consutlar la api
    useEffect(() => {

        // query a la api
        const consultarApi = async () => {
            const productosConsulta = await clienteAxios.get('/productos');
            // console.log(productosConsulta.data);
            guardarProductos(productosConsulta.data);
            // console.log(productos);
        }

        // llamando la api
        consultarApi();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);



    return ( 
        <Fragment>
            <h2>Productos</h2>

            <Link to={'/productos/nuevos'} className="btn btn-verde nvo-cliente"> <i className="fas fa-plus-circle"></i>
                Nuevo Producto
            </Link>

            <ul className="listado-productos">
                {productos.map(producto => (
                    <Producto 
                        key={producto._id}
                        producto={producto}
                    />
                ))}        
            </ul>

        </Fragment>
     );
}
 
export default Productos;
