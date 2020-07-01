import React, { useState } from 'react';
import Error from './Error';

const Formulario = ({ busqueda, guardarBusqueda, guardarConsultar }) => {


    // state para validacion
    const [ error, guardarError ] = useState(false);

    // Extraer cuidad y pais
    const { ciudad, pais } = busqueda;

    // Funcion que coloca los elementos en el state
    // Esta ocacion para la funcion que modifica el state usaremos la nomenclatura "general"
    const handleChange = e => {
        // Actualizar el state
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        });
    }

    // Evento: Cuando el usuario da submit al form
    const handleSubmit = e => {
        e.preventDefault();

        // Validar
        if (ciudad.trim()==='' || pais.trim()==='') {
            
            guardarError(true);
            
            return;
        }

        guardarError(false);

        // Pasar al componente principal
        guardarConsultar(true);
    }
    
    


    return ( 
        <form
            // Evento, siguiendo la nomenclatura general
            onSubmit={handleSubmit}
        >

            {error ? <Error mensaje="Ambos Campos son Obligatorios" /> : null}
            <div className="input-field col s12">
                {/* El orden de poner primero el input y despues el label se debe a materialize */}
                <input 
                    // La API que usaremos requiere el nombre de la ciudad
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChange}
                />
                {/* no podemos usar for en label pero si htmlFor */}
                <label htmlFor="ciudad">Ciudad: </label>
            </div>
            <div className="input-field col s12">
                <select
                    name="pais"
                    id="pais"
                    value={pais}
                    onChange={handleChange}
                >
                    <option value="">--Seleccione un país--</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="pais">Pais: </label>
            </div>

            <div className="input-field col s12">
                <input 
                    type="submit"
                    value="Buscar Clima"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />
            </div>
        </form>
    );
}
 
export default Formulario;