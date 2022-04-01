import axios from 'axios';
const GET_COUNTRIES='GET_COUNTRIES';
const ORDEN_FILTRO='ORDEN_FILTRO';
export function getCountries(){
    return function(dispatch){
        return axios.get('http://localhost:3001/countries')
        .then((r) => {
            return dispatch({
            type:GET_COUNTRIES,
            payload:r.data
            })   
        })      
    }
}

export function crearAct(nombre,dificultad,duracion,temporada){
    return function(dispatch){
        return axios.post('http://localhost:3001/activity',{
            Nombre:nombre,
            Dificultad:dificultad,
            Duracion:duracion,
            Teporada:temporada
        })
    }
}

export function ordenFiltro(orden,filtro){
    return({
        type:ORDEN_FILTRO,
        orden: orden,
        filtro: filtro
    })
}

export{
    GET_COUNTRIES,
    ORDEN_FILTRO
}