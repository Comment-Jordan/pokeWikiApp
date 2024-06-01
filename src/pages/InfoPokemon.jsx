
import { to } from "mathjs";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate  } from "react-router-dom";

import { MAX_POKEMON } from "../utils/Globals";

export default function InfoPokemon(){
    let { id } = useParams();
    const navigate = useNavigate();
    const [cargando, setCargando] = useState(true)
    const [infoConsulta, setInfoConsulta] = useState({})
    const [idPokemon, setIdPokemon] = useState(id)
    const [totalPokemon, setTotalPokemon] = useState(MAX_POKEMON)
    
    const siguiente = () => {
        let idIncrementadas;
        if(parseInt(id)+1>totalPokemon){            
            idIncrementadas=1;
        }
        else{
            idIncrementadas = parseInt(id) + 1;            
        }
        navigate(`/infoPokemon/${idIncrementadas}`);
    };

    const anterior = () => {
        let idIncrementadas;
        if(parseInt(id)-1<1){
            idIncrementadas=totalPokemon;
        }
        else{
            idIncrementadas = parseInt(id) - 1;            
        }
        navigate(`/infoPokemon/${idIncrementadas}`);
    };

    useEffect(() => {    
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setInfoConsulta(data)
            setCargando(false)
        });
    }, [id]);


    if(cargando){return <h1>Cargando......</h1>}
    return(
        <article className='conteiner-page conteiner-info-pokemon'>
            <article className='item-info-pokemon info-pokemon-resources'>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
                <h3 className='info-pokemon-descripcion'>{infoConsulta.name}</h3>
            </article>
            <article className='item-info-pokemon-info'>
            </article>
            <div className='container-botones-info-pokemon'>
                <button type='button' onClick={anterior}>Anterior</button>                
                <button type='button' onClick={siguiente}>Siguiente</button>                
            </div>            
        </article>        
    );
}