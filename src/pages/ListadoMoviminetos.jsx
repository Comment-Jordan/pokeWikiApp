import { useState, useEffect } from "react";

import CardMovimiento from "./components/CardMovimiento";
import BotonesDesplazamiento from "./components/BotonesDesplazamiento";

export default function ListadoMovimientos(){
    const [numeroPorConsulta, setNumeroPorConsulta] = useState(25)
    const[primeroMostrar, setPrimeroMostrar] = useState(0)
    const [arrayUrlTipos, setArrayUrlTipos] = useState([])
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
    

    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/move?offset=${primeroMostrar}&limit=${numeroPorConsulta}`)
        .then(response=> response.json())
        .then(data=> {
            setArrayUrlTipos(data.results)
            setCargando(false)
        })        
    }, [primeroMostrar])

    if(cargando) {return <h1>Cargando.....</h1>}

    return(
        <div className='container-page conteiner-listado-pokemon'>
             <div className='grid-botones-desplazamiento'>
                <BotonesDesplazamiento funcAnterior={anterior} funcInicio={inicio} funcSiguiente={siguiente}/>
            </div>
            <div className='container-page conteiner-movs'>
                {arrayUrlTipos.map((item, index) => (
                    <CardMovimiento key={index} urlMovimiento={item.url} />
                ))}            
            </div>
        </div>
    );
}