import { useState, useEffect } from "react";

import CardMovimiento from "./components/CardMovimiento";

export default function ListadoMovimientos(){
    const [inicioConsulta, setInicioConsulta] = useState(1)
    const [saltosConsulta, setSaltosConsuls] = useState(25)
    const [finConsulta, setFinConsulta] = useState(inicioConsulta*saltosConsulta)
    const [arrayUrlTipos, setArrayUrlTipos] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/move?offset=${inicioConsulta}&limit=${finConsulta}`)
        .then(response=> response.json())
        .then(data=> {setArrayUrlTipos(data.results)})        
        .finally(setCargando(false))
    }, [])

    if(cargando) {return null}
    return(
        <div className='container-page conteiner-movs'>
            {arrayUrlTipos.map((item, index) => (
                <CardMovimiento key={index} urlMovimiento={item.url} />
            ))}            
        </div>
    );
}