
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
    const [backSpriteDefault, setBackSpriteDefault] = useState(``)
    const [frontSpriteDefault, setFrontSpriteDefault] = useState(``)
    const [backSpriteShiny, setBackSpriteShiny] = useState(``)
    const [frontSpriteShiny, setFrontSpriteShiny] = useState(``)
    const [mostrarFrente, setMostrarFrente] = useState(true)
    const [shinySelected, setShinySelected] = useState(false)    

    const POSICONES={
        default: {
            frente: frontSpriteDefault,
            espalda: backSpriteDefault
        },
        shiny: {
            frente: frontSpriteShiny,
            espalda: backSpriteShiny
        }        
    };
    
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
            setBackSpriteDefault(data.sprites.back_default)
            setFrontSpriteDefault(data.sprites.front_default)
            setBackSpriteShiny(data.sprites.back_shiny)
            setFrontSpriteShiny(data.sprites.front_shiny)
            setShinySelected(false)
            setMostrarFrente(true)
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
            })
            .finally(() => setCargando(false));
    }, [id]);

    const estilosBotonFrente = {
        background: !mostrarFrente?'white':'#577B8D'
    };

    const estilosBotonRareza = {
        background: shinySelected?'#ffd700':'#577B8D'
    };

      
    if(cargando){return <h1>Cargando......</h1>}
    return(
        <article className='conteiner-page conteiner-info-pokemon'>
            <article className='item-info-pokemon info-pokemon-resources'>
                <div className='conteiner-imagen-info-pokemon'>
                    <img id='tagSprite' src={POSICONES['default']['frente']}/>
                    <a style={estilosBotonFrente}className='opcion-seleccionada' onClick={() => {
                        const imagen = document.getElementById('tagSprite');
                        const shiny= shinySelected?'shiny':'default';
                        const posicion= mostrarFrente? 'espalda': 'frente';
                        imagen.src=POSICONES[shiny][posicion];

                        //Alternar la posicion
                        const cambioPosicion=!mostrarFrente;
                        setMostrarFrente(cambioPosicion);                        
                    }}>
                        🗘
                    </a>

                    <a style={estilosBotonRareza}className='opcion-seleccionada' onClick={() => {
                        const imagen = document.getElementById('tagSprite');                        
                        const rareza= shinySelected?'default':'shiny';
                        const posicion= mostrarFrente? 'frente': 'espalda';
                        imagen.src=POSICONES[rareza][posicion];

                        //Alternar la rareza
                        const cambioRareza=!shinySelected;
                        setShinySelected(cambioRareza);                   
                    }}>
                        ★
                    </a>
                
                </div>
                {urlTipos.map((item,index)=>(
                    <CardTipo key={index} urlConsulta={item}/>
                ))}
            </article>
            <article className='item-info-pokemon-info'>
                <h3 className='info-pokemon-descripcion'>{infoConsulta.name} #{infoConsulta.id}</h3>
                <hr/>
                <div className='descripcion-info-pokemon'>
                    <h1>Stats Base</h1>
                </div>
                <div className='grafico-info-pokemon'>
                    <GraficoStats data={stats}/>
                </div>
            </article>
            <div className='container-botones-info-pokemon'>
                <button className='arrow-info-pokemon' type="button" onClick={anterior}>◄</button>
                <button className='arrow-info-pokemon' type='button' onClick={siguiente}>►</button>                
            </div>            
        </article>        
    );
}