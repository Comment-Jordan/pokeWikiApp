import { useEffect, useState } from "react";
import { get } from "../JS/Get";

import Cargando from "./components/Modals/Cargando";
import CardTipo from "./components/CardTipo";

export default function ListadoPokemon(){   
    const [cargando, setCargando]= useState(true)
    const [consultaTiposPokemon, setConsultaTiposPokemon]=useState({})
    const [urlTipos, setUrlTipos]=useState([])

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/type/')
        .then(response=> response.json())
        .then(data=>{            
            const arregloUrlTipos = data.results.map(itemTipo => itemTipo.url);
            setUrlTipos(arregloUrlTipos)      
            setCargando(false)
        });        
    },[]);

    return(
        <div className="conteiner-page coteiner-listado">
            {cargando && <h1>Cargando...</h1>}
            {!cargando && urlTipos.map((itemUrl, index) => (
                <CardTipo key={index} urlConsulta={itemUrl} />
            ))}
        </div>
    );
}