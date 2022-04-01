import React, { useState }from 'react';
import {connect} from 'react-redux';
import {crearAct} from '../actions/index';

function Formulario(){
    
    const [input,setInput]=useState({
        nombre:"",
        dificultad:"",
        duracion:"",
        temporada:"",
        paises:""
    })

    const handleInputChange=function(e){
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
             
    }

    return(
        <form>
            <label>Nombre</label>
            <input 
            type='text'
            name='nombre'
            value={input.nombre}
            onChange={handleInputChange}
            />
            <br/>
            <label>Dificultad</label>
            <input
            type="text"
            name='dificultad'
            value={input.dificultad}
            onChange={handleInputChange} 
            />
            <br/>
            <label>Duración</label>
            <input 
            type="text" 
            name='duracion'
            value={input.duracion}
            onChange={handleInputChange}
            />
            <br/>
            <label >Temporada</label>
            <input 
            type="text" 
            name='temporada'
            value={input.temporada}
            onChange={handleInputChange}
            />
            <br/>
            <input onClick={()=>{crearAct()}} type="submit"/>
        </form>
    )
}

function mapDispatchToProps(dispatch){
    return({
        crearAct: ()=>{dispatch(crearAct())}
    })
}

export default connect(null,mapDispatchToProps)(Formulario)