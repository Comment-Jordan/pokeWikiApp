
import { to } from "mathjs";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate  } from "react-router-dom";
import { Radar } from 'react-chartjs-2';


import GraficoStats from "./components/GraficoStats";
import { MAX_POKEMON } from "../utils/Globals";
import CardTipo from "./components/CardTipo";

export default function InfoPokemon(){
    let { id } = useParams();
    const navigate = useNavigate();
    const [cargando, setCargando] = useState(true)
    const [infoConsulta, setInfoConsulta] = useState({})
    const [stats, setStats] = useState([])
    const [totalPokemon, setTotalPokemon] = useState(MAX_POKEMON)
    const [urlTipos, setUrlTipos] = useState([])

    
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
            let arrayStats=[];
            let urlConsulta=[];
            for(let i=0;i<data.stats.length;i++){
                arrayStats.push(data.stats[i].base_stat);
            }
            setStats(arrayStats)
            setInfoConsulta(data)
            for(let j = 0; j < data.types.length; j++){                
                urlConsulta.push(data.types[j].type.url);
            }
            setUrlTipos(urlConsulta)
            setCargando(false)
        });
    }, [id]);


    if(cargando){return <h1>Cargando......</h1>}
    return(
        <article className='conteiner-page conteiner-info-pokemon'>
            <article className='item-info-pokemon info-pokemon-resources'>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
                {urlTipos.map((item,index)=>(
                    <CardTipo key={index} urlConsulta={item}/>
                ))}
            </article>
            <article className='item-info-pokemon-info'>
                <h3 className='info-pokemon-descripcion'>{infoConsulta.name}</h3>                
                <div className='descripcion-info-pokemon'>
                    <h1>test</h1>                                     
                </div>
                <div className='grafico-info-pokemon'>
                    <GraficoStats data={stats}/>
                </div>
            </article>
            <div className='container-botones-info-pokemon'>
                <button type='button' onClick={anterior}>Anterior</button>                
                <button type='button' onClick={siguiente}>Siguiente</button>                
            </div>            
        </article>        
    );
}