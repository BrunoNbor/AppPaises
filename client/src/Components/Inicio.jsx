import React from 'react';
import s from './Inicio.module.css';
import {Link} from 'react-router-dom';

function Inicio(){
    
    return(
        <div className={s.div}>
            <Link to='/countries'>
                <button 
                className={s.button}
                >Paises
                </button>
            </Link>             
        </div>
    )
}

export default Inicio;