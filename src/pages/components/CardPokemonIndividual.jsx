
import { useEffect, useState } from "react";

import CardTipo from "./CardTipo";

export default function CardPokemonIndividual({ datosPokemon }){
    
    // console.log(datosPokemon);
    const [cargando, setCargando] = useState(true)
    const [imagen, setImagen] = useState("")
    const [name, setName] = useState("")
    const [id, setId] = useState(0)
    const [urlTipos, setUrlTipos] = useState([])

    useEffect(() => {        
        fetch(datosPokemon.url)
        .then(response=> response.json())
        .then(data=>{            
            // console.log(data);
            let urlConsulta=[];
            setImagen(data.sprites.front_default)
            setName(data.name)
            setId(data.id)
            for(let i = 0; i < data.types.length; i++){                
                urlConsulta.push(data.types[i].type.url);
            }
            setUrlTipos(urlConsulta)
            setCargando(false)
        });        
    },[]);

    if(cargando){return null}
    return(
        <article className='card-pokemon'>            
            <h2 className='id-card-pokemon'>#{id}</h2>
            <img className='imagen-card-pokemon' src={imagen}/>
            <h4 className='nombre-card-pokemon'>{name}</h4>
            {urlTipos.map((item,index)=>(
                <CardTipo key={index} urlConsulta={item}/>
            ))}
        </article>
    );
}