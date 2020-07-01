import React from 'react';

const Clima = ({ resultado }) => {

    const { name, main } = resultado;

    // Para evitar el error al cargar main.temp cuando no hay nada
    if (!name) return null;

    // Para converción de kelvin - Centigrados
    const kelvin = 273.15;

    return ( 
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es: </h2>
                <p className="temperatura">
                    {/* Para que nos retorne un numero y redonde a 2 digitos */}
                    { parseFloat(main.temp - kelvin, 10).toFixed(2) }
                    <span> &#x2103; </span>
                </p>
                <p> Temperatura Máxima:
                    {/* Para que nos retorne un numero y redonde a 2 digitos */}
                    { parseFloat(main.temp_max - kelvin, 10).toFixed(2) }
                    <span> &#x2103; </span>
                </p>
                <p> Temperatura Mínima:
                    {/* Para que nos retorne un numero y redonde a 2 digitos */}
                    { parseFloat(main.temp_min - kelvin, 10).toFixed(2) }
                    <span> &#x2103; </span>
                </p>
            </div>
        </div>
     );
}
 
export default Clima;