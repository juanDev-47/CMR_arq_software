import React, { Fragment } from "react";

// Layout
import Header from "./components/layout/Header";
import Navegacion from "./components/layout/Navegacion";

function App() {
  return (
    <Fragment>
      <Header />

      <div className="grid contenedor contenido-principal">
        <Navegacion />

        <main className="caja-contenido col-9">
          {/* Routing para los diferentes componentes */}
        </main>

      </div>
    </Fragment>
  );
}

export default App;
