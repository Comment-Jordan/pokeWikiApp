import { useEffect, useState } from "react";

import CardPokemonIndividual from "./components/CardPokemonIndividual";
import BotonesDesplazamiento from "./components/BotonesDesplazamiento.jsx";

export default function ListadoPokemon(){
    
    const [numeroPorConsulta, setNumeroPorConsulta] = useState(25)
    const[primeroMostrar, setPrimeroMostrar] = useState(1)
    const[ultimoMostrar, setUltimoMostrar] = useState(numeroPorConsulta)
    const [infoConsulta, setInfoConsulta] = useState([])
    const [cargando, setCargando] = useState(true)    

    const anterior = () => {
        setPrimeroMostrar(prevPrimeroMostrar => prevPrimeroMostrar - numeroPorConsulta);
    };
    

    const inicio = () => {
        setPrimeroMostrar(1);
    };
    

    const siguiente = () => {
        setPrimeroMostrar(prevPrimeroMostrar => prevPrimeroMostrar + numeroPorConsulta);
    };
    

    useEffect(() => {
        setCargando(true)   
        fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${primeroMostrar}&limit=${ultimoMostrar*numeroPorConsulta}`)
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
            <BotonesDesplazamiento funcAnterior={anterior} funcInicio={inicio} funcSiguiente={siguiente}/>
            {infoConsulta.map((jsonInfo, index) => (
                <CardPokemonIndividual key={index} datosPokemon={jsonInfo} />
            ))}
        </article>
    );
}