import { useEffect, useState } from "react";

import CardPokemonIndividual from "./components/CardPokemonIndividual";

export default function ListadoPokemon(){
    
    const [numeroPorConsulta, setNumeroPorConsulta] = useState(25)
    const[primeroMostrar, setPrimeroMostrar] = useState(1)
    const[ultimoMostrar, setUltimoMostrar] = useState(primeroMostrar*numeroPorConsulta)
    const [infoConsulta, setInfoConsulta] = useState([])
    const [cargando, setCargando] = useState(true)    

    useEffect(() => {        
        fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${primeroMostrar}&limit=${ultimoMostrar}`)
        .then(response=> response.json())
        .then(data=>{            
            console.log(data);
            setInfoConsulta(data.results)
            setCargando(false)
        });        
    },[primeroMostrar]);

    if(cargando){return <h1>Cargando.......</h1>}

    return(
        <article className='container-page conteiner-listado-pokemon'>
            {infoConsulta.map((jsonInfo, index) => (
                <CardPokemonIndividual key={index} datosPokemon={jsonInfo} />
            ))}
        </article>
    );
}