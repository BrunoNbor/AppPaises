import { GET_COUNTRIES } from "../actions/index"

const initialState={
    paises:[],
    orden:"",
    filtrar:""
}
export default function rootReducer(state=initialState, action){
    switch(action.type){
        case GET_COUNTRIES:
            function ordenar(a,b){
                return a.Nombre.localeCompare(b.Nombre)
            }
            return{
                paises: action.payload.sort(ordenar),
                orden: action.orden,
                filtrar: action.filtro
            } 
        
        default:
            return state;
        
    }
    
}
