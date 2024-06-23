import { useEffect, useState } from "react";

import CardPokemonIndividual from "./components/CardPokemonIndividual";
import BotonesDesplazamiento from "./components/BotonesDesplazamiento.jsx";

export default function ListadoPokemon(){
    
    const [numeroPorConsulta, setNumeroPorConsulta] = useState(25)
    const[primeroMostrar, setPrimeroMostrar] = useState(0)
    const [infoConsulta, setInfoConsulta] = useState([])
    const [cargando, setCargando] = useState(true)    

    const anterior = () => {
        const nuevoPrimero=primeroMostrar-numeroPorConsulta;
        setPrimeroMostrar(nuevoPrimero);
    };
    

    const inicio = () => {
        setPrimeroMostrar(1);
    };
    

    const siguiente = () => {
        const nuevoPrimero=primeroMostrar+numeroPorConsulta;
        setPrimeroMostrar(nuevoPrimero);
    };
    

    useEffect(() => {
        setCargando(true)
        fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${primeroMostrar}&limit=${numeroPorConsulta}`)
        .then(response=> response.json())
        .then(data=>{            
            console.log(data);            
            setInfoConsulta(data.results)
            setCargando(false)
        });        
    },[primeroMostrar])

    if(cargando){return <h1>Cargando.......</h1>}

    return(
        <article className='container-page conteiner-listado-pokemon'>
            <div className='grid-botones-desplazamiento'>
                <BotonesDesplazamiento funcAnterior={anterior} funcInicio={inicio} funcSiguiente={siguiente}/>
            </div>
            <div className='grid-listado'>
                {infoConsulta.map((jsonInfo, index) => (                
                    <CardPokemonIndividual key={index} datosPokemon={jsonInfo} />
                ))}
            </div>
        </article>
    );
}