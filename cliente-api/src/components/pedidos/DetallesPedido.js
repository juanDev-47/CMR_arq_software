import React, {Fragment} from 'react';

function DetallesPedido({pedido}) {

    const { cliente, total } = pedido;

    return(
        <Fragment>
            <li className="pedido">
          <div className="info-pedido">
            <p className="nombre">Cliente: {cliente.nombre} {cliente.apellido}</p>
            <p className="id">Email: {cliente.email}</p>
            <p className="nombre">Telefono: {cliente.telefono}</p>

            <div className="articulos-pedido">
              <p className="productos">Artículos Pedido: </p>
              <ul>
                {pedido.pedido.map(articulos => (
                    <li key={pedido._id+articulos.producto._id}>
                        <p>{articulos.producto.nombre}</p>
                        <p>Precio: ${articulos.producto.precio}</p>
                        <p>Cantidad: {articulos.cantidad}</p>
                    </li>
                ))}
              </ul>
            </div>
            <p className="total">Total: ${total} </p>
          </div>
          <div className="acciones">
            
            <button type="button" className="btn btn-rojo btn-eliminar">
              <i className="fas fa-times"></i>
              Eliminar Pedido
            </button>
          </div>
        </li>
        </Fragment>
    )
}

export default DetallesPedido;