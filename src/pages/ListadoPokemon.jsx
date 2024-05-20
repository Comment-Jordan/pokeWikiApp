import { useEffect, useState } from "react";
import { get } from "../JS/Get";

import Cargando from "./components/Modals/Cargando";
import CardLista from "./components/CardLista";

export default function ListadoPokemon(){   
    const [cargando, setCargando]= useState(true)
    const [consultaTiposPokemon, setConsultaTiposPokemon]=useState({})

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/type/')
        .then(response=> response.json())
        .then(data=>{            
            setConsultaTiposPokemon(data)
            setCargando(false)
        })
    }, []);

    return(
        <div className="conteiner-page">
            {cargando ? <Cargando/>:<CardLista datosTipos={consultaTiposPokemon}/>}
        </div>
    );
}