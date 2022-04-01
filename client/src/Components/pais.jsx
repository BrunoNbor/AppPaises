import React,{useState} from 'react';
import { connect } from 'react-redux';
import {getCountries} from '../actions/index';

function Pais(props){

    const [estado,setEstado]=useState({
        pagina:2,
        mostrar:[0,10]
    });
    if(props.paises.length<1){
        props.getCountries();
    }
    
    function siguiente(){
        setEstado({
            pagina: estado.pagina+1,
            mostrar: [estado.mostrar[1],estado.pagina*10]
        })
    }

    function anterior(){
        setEstado({
            pagina: estado.pagina-1,
            mostrar: [estado.mostrar[0]-10,estado.mostrar[0]]
        })
    }


    return(
        <div>
            <ul>
            {       
                props.paises.map((pais,index)=>{
                    if(index>=estado.mostrar[0] && index<estado.mostrar[1]){
                        return(
                            <li key={pais.id}>
                                <h1>{pais.Nombre}</h1>
                                <img src={pais.Imagen} alt="No se encuentra la imagen"/>
                                <h2>{pais.Continente}</h2>
                            </li>
                        )}
                    else{
                        return null
                    }    
                }) 
            }
            </ul>
            {
            estado.pagina>2 && <button onClick={()=>{anterior()}}>Anterior</button>
            }
            <span>{estado.pagina-1}</span>
            {
             estado.pagina<26 && <button onClick={()=>{siguiente()}}>Siguiente</button>
            }
            
        </div>
        
    )
}

function mapStateToProps(state){
    return{
        paises: state.paises,
    }
}

function mapDispatchToProps(dispatch){
    return{
        getCountries: ()=>dispatch(getCountries()),

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Pais);