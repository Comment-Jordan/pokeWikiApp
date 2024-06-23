
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import MT from "../.././assets/images/mt.png";

export default function CardMovimiento( {urlMovimiento} ){

    const [nombre, setNombre] = useState('')
    const [idMovimiento, setIdMovimiento] = useState(1)
    const [cargando, setCargando] = useState(true)


    useEffect(()=>{
        setCargando(true)
        fetch(urlMovimiento)
        .then(response => response.json())
        .then(data => {
            setNombre(data.name)
            setIdMovimiento(data.id)
        })
        .finally(()=>{setCargando(false)})
    },[urlMovimiento])

    if(!cargando){
        return(
            <div className='card-mov'>
                <p className='id-mov'>#{idMovimiento}</p>
                <img src={MT}/>
                <Link to={`/infoMovimiento/${idMovimiento}`} className='titulo-description'>{nombre}</Link>            
            </div>
        );
    }
}