import React from 'react';

const Navegacion = () => (
    
        <aside className="sidebar col-3">
            <h2>Administración</h2>

            <nav className="navegacion">                
                    <a href="index.html" className="clientes"><i className="fas fa-users"></i> Clientes</a>
                <a href="productos.html" className="productos"><i className="fas fa-boxes"></i> Productos</a>
                <a href="productos.html" className="productos"><i className="fas fa-book"></i> Pedidos</a>
            </nav>
        </aside>
);

export default Navegacion;