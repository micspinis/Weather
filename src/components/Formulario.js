import React, { useState } from 'react';

const Formulario = () => {

    // state del formulario
    const [ busqueda, guardarBusqueda] = useState({
        ciudad: '',
        pais: ''
    });

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
    


    return ( 
        <form>
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
        </form>
    );
}
 
export default Formulario;