import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error';


function App() {

  // state del formulario -> componente principal
  const [ busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  });

  // States
  const [ consultar, guardarConsultar ] = useState(false);
  const [ resultado, guardarResultado ] = useState({});
  const [ error, guardarError ] = useState(false);  

  // Destructuring
  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const consultarAPI = async () => {

      if (consultar) {
        const appId = '66ecfc6ee4309e772cd21bacf09d4ef9';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        guardarResultado(resultado);
        // Regresamos al false para hacer una nueva busqueda
        guardarConsultar(false);

        // Si la consulta no se encuentra en la API
        if (resultado.cod === "404") {
            guardarError(true);
        } else {
            guardarError(false);
        }
      }
      
    }
    consultarAPI();
  }, [consultar])

  // Carga condicional de componente.
  let componente;
  if (error) {
    componente = <Error mensaje="No hay resultados" />
  } else {
    componente = <Clima 
                    resultado={resultado}
                  />
  }
  

  return (
    <Fragment>
      <Header 
        titulo="Clima React App"
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
                <Formulario 
                 busqueda={busqueda}
                 guardarBusqueda={guardarBusqueda}
                 guardarConsultar={guardarConsultar}
                />
            </div>
            <div className="col m6 s12">
                {componente}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
