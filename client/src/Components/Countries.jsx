import React from 'react';
import Buscador from './Buscador';
import Pais from './pais';
import Opciones from './Opciones';
import style from './Countries.module.css';

export default function Countries(){
    return(
        <div>
            <div>
            <Buscador/>    
            </div>
            <div className={style.div}>
                <Pais/>
                <Opciones/>
            </div>
            
        </div>
        
    )
}