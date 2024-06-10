import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import MT from "../assets/images/mt.png";
import { MAX_MOVES } from "../utils/Globals";
import CardTipo from "./components/CardTipo";

export default function InfoMovimiento(){
    let { id } = useParams();
    const navigate = useNavigate();
    const [infoConsulta, setInfoConsulta] = useState({})
    const [cargando, setCargando] = useState(true)

    const siguiente = () => {
        let idIncrementadas;
        if(parseInt(id)+1>MAX_MOVES){            
            idIncrementadas=1;
        }
        else{
            idIncrementadas = parseInt(id) + 1;            
        }
        navigate(`/infoMovimiento/${idIncrementadas}`);
    };

    const anterior = () => {
        let idIncrementadas;
        if(parseInt(id)-1<1){
            idIncrementadas=MAX_MOVES;
        }
        else{
            idIncrementadas = parseInt(id) - 1;            
        }
        navigate(`/infoMovimiento/${idIncrementadas}`);
    };

    useEffect(() => {        
        fetch(`https://pokeapi.co/api/v2/move/${id}`)
            .then(response => response.json())
            .then(datos => {
                setInfoConsulta(datos)
                console.log(datos);
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
            })
            .finally(() => setCargando(false));
    }, [id]);
    

    if (cargando) {return null}
    return(
        <div className='conteiner-info-move'>
            <div className='item-desc-mov resourses-move'>
                <img src={MT}/>
                <CardTipo urlConsulta={infoConsulta.type.url}/>
            </div>
            <div className='item-desc-mov descripcion-mov'>
                <h3>Nombre: {infoConsulta.name}</h3>                
                {infoConsulta.accuracy?<h3>Precision: {infoConsulta.accuracy}</h3>:""}
                {infoConsulta.power?<h3>Poder: {infoConsulta.power}</h3>:""}            
                <h3>PP: {infoConsulta.pp}</h3>
                <h3>Prioridad: {infoConsulta.priority}</h3>
            </div>
            <div className='container-botones-info-pokemon item-bottoms-move'>
                <button className='arrow-info-pokemon' type="button" onClick={anterior}>◄</button>
                <button className='arrow-info-pokemon' type='button' onClick={siguiente}>►</button>                
            </div>  
        </div>
    );
}