import React, { Fragment, useState, useEffect } from "react";
import clienteAxios from "../../config/axios";
import Swal from "sweetalert2";

import FormBuscarProducto from "./FormBuscarProducto";
import FormCantidadProducto from "./FormCantidadProducto";

function NuevoPedido(props) {
  const { id } = props.match.params;

  // state
  const [cliente, guardarCliente] = useState({});
  const [busqueda, guardarBusqueda] = useState('');
  const [productos, guardarProductos] = useState([]);


  useEffect(() => {
    // obtener el cliente
    const consultarAPI = async () => {
      // consultar el cliente actual
      const res = await clienteAxios.get(`/clientes/${id}`);

      guardarCliente(res.data);
    };

    // llamar la api
    consultarAPI();
  }, []);


  const buscarProducto = async e => {
    e.preventDefault();

    // obtener los productos de la busqueda
    const resultadoBusqueda = await clienteAxios.post(`/productos/busqueda/${busqueda}`);
    
    // si no hay resultados una alerta, contrario agregar
    if(resultadoBusqueda.data[0]){

        let productoResultado = resultadoBusqueda.data[0];
        // agregar la llave 
        productoResultado.producto = resultadoBusqueda.data[0]._id;
        productoResultado.cantidad = 0;

        // ponerlo en el state
        guardarProductos([...productos, productoResultado]);
        
    } else {
        Swal.fire({
            type: 'error',
            title: 'Sin resultados',
            text: 'No hubo resultados'
        })
    }

    
  }

  // almacenar una busqueda en el state
  const leerDatosBusqueda = e => {
    guardarBusqueda(e.target.value);
  }


  return (
    <Fragment>
      <div className="ficha-cliente">
        <h3>Datos de Cliente</h3>
        <p>
          Nombre: {cliente.nombre} {cliente.apellido}
        </p>
        <p>Telefono: {cliente.telefono}</p>
      </div>

      <FormBuscarProducto 
        leerDatosBusqueda = {leerDatosBusqueda}
        buscarProducto = {buscarProducto}
      />

      <ul className="resumen">
        {productos.map((producto, index) => (
            <FormCantidadProducto 
                key={producto.producto}
                producto={producto}
            />
        ))}

      </ul>
      <div className="campo">
        <label>Total:</label>
        <input
          type="number"
          name="precio"
          placeholder="Precio"
          readOnly="readonly"
        />
      </div>
      <div className="enviar">
        <input type="submit" className="btn btn-azul" value="Agregar Pedido" />
      </div>
    </Fragment>
  );
}

export default NuevoPedido;
