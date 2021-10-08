import React, { Fragment } from "react";

// Routing
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Layout
import Header from "./components/layout/Header";
import Navegacion from "./components/layout/Navegacion";

// componentes
import Clientes from "./components/clients/Clientes";
import NuevoCliente from "./components/clients/NuevoCliente";
import editarCliente from "./components/clients/editarCliente";
import Productos from "./components/products/Productos";
import Pedidos from "./components/pedidos/Pedidos";
import EditarProducto from "./components/products/editarProducto";
import NuevoProducto from "./components/products/nuevoProducto";
import NuevoPedido from "./components/pedidos/nuevoPedido";

function App() {
  return (
    <Router>
      <Fragment>
        <Header />

        <div className="grid contenedor contenido-principal">
          <Navegacion />

          <main className="caja-contenido col-9">
            <Switch>
              <Route exact path="/" component={Clientes} />
              <Route exact path="/cliente/nuevo" component={NuevoCliente} />
              <Route exact path="/cliente/editar/:id" component={editarCliente} />

              <Route exact path="/productos" component={Productos} />
              <Route exact path="/Producto/editar/:id" component={EditarProducto} />
              <Route exact path="/productos/nuevos" component={NuevoProducto} />
              
              <Route exact path="/pedidos" component={Pedidos} />
              <Route exact path="/pedidos/nuevo/:id" component={NuevoPedido} />
            </Switch>
          </main>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
