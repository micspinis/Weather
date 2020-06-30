import React from 'react';


// Recordar que para los estilos estamos usando materialeze, a eso se deben las clases en los tags, ademas esta libreria le da estilos a los enlaces, asi que veremos mas <a> que <h1> etc.

const Header = ({ titulo }) => {
    return ( 
        <nav>
            <div className="nav-wrapper light-blue darken-2">
                <a href="#!" className="brand-logo"> {titulo} </a>
            </div>
        </nav>
     );
}
 
export default Header;