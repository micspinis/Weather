import React from 'react';

const Formulario = () => {
    return ( 
        <form>
            <div className="input-field col s12">
                {/* El orden de poner primero el input y despues el label se debe a materialize */}
                <input 
                    // La API que usaremos requiere el nombre de la ciudad
                    type="text"
                    name="ciudad"
                    id="ciudad"
                />
                {/* no podemos usar for en label pero si htmlFor */}
                <label htmlFor="ciudad">Ciudad: </label>
            </div>
            <div className="input-field col s12">
                <select
                    name="pais"
                    id="pais"
                >
                    <option value="">--Seleccione un país--</option>
                </select>
                <label htmlFor="pais">Pais: </label>
            </div>
        </form>
    );
}
 
export default Formulario;