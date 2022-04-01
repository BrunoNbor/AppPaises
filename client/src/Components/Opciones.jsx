import React, {useState} from 'react';
import {connect} from 'react-redux';
import { ordenFiltro } from '../actions';
import s from './Countries.module.css';
import {Link} from 'react-router-dom';

function Opciones(){

    const [OrdFil, setOrdFil]=useState({
        orden:"",
        filtro:""
    })
    

    return(
        <div className={s.opcines}>
            <h3>Ordenar por:</h3>
            <label>
                <input 
                onClick={()=>{setOrdFil({
                    ...OrdFil,
                    orden:"ZA"
                })}} 
                type="checkbox" 
                value={'ZA'} 
                />Alfabeto ascendente
            </label>
            <br/>
            <label>
                <input 
                onClick={()=>{setOrdFil({
                    ...OrdFil,
                    orden: "PoblacionA"
                })}} 
                type="checkbox" 
                value={'PoblacionA'} 
                />Poblacion ascendente
            </label>
            <br/>
            <label>
                <input 
                onClick={()=>{setOrdFil({
                    ...OrdFil,
                    orden:"PoblacionD"
                })}} 
                type="checkbox" 
                value={'PoblacionD'}
                />Pobalcion descendente
            </label>
            <br/>
            <button >Ordenar</button>

            <h3>Filtrar por:</h3>
            <label>
                <input 
                onClick={()=>{setOrdFil({
                    ...OrdFil,
                    filtro: "Continente"
                })}} 
                type="checkbox" 
                value={'Continente'}
                />Continente
            </label>
            <br/>
            <label>
                <input 
                onClick={()=>{setOrdFil({
                    ...OrdFil,
                    filtro: "Actividad"
                })}} 
                type="checkbox" 
                value='Actividad' 
                />Actividad turistica
            </label>
            <br/>
            <button >Filtrar</button>
            <Link to='/countries/actividad'><button>Crear Actividad</button></Link>
        </div>
    )
}

 function mapDispachToProps(dispatch){
     return({
        ordenFiltro: ordenFiltro()      
     })
 }

export default connect(null,mapDispachToProps)(Opciones)