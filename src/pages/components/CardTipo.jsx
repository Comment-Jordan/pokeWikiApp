import { useEffect, useState } from "react";
import { matchPath } from "react-router-dom";

import { colorTipo } from "../../utils/Diccionario";
// import steel from "../../assets/icons/steel.svg";
// import water from "../../assets/icons/water.svg";
// import bug from "../../assets/icons/bug.svg";
// import dragon from "../../assets/icons/dragon.svg";
// import electric from "../../assets/icons/electric.svg";
// import ghost from "../../assets/icons/ghost.svg";
// import fire from "../../assets/icons/fire.svg";
// import fairy from "../../assets/icons/fairy.svg";
// import ice from "../../assets/icons/ice.svg";
// import fighting from "../../assets/icons/fighting.svg";
// import normal from "../../assets/icons/normal.svg";
// import grass from "../../assets/icons/grass.svg";
// import psychic from "../../assets/icons/psychic.svg";
// import rock from "../../assets/icons/rock.svg";
// import dark from "../../assets/icons/dark.svg";
// import ground from "../../assets/icons/ground.svg";
// import poison from "../../assets/icons/poison.svg";
// import flying from "../../assets/icons/flying.svg";



export default function CardTipo({ urlConsulta }){
    
    // const [datosConsulta, setDatosConsulta] = useState({})
    const [color, setColor] = useState({})
    const [cargando, setCargando] = useState(true)
    const [nombre, setNombre] = useState("")        

    useEffect(() => {
        fetch(urlConsulta)
          .then(response => response.json())
          .then(data => {
            // setDatosConsulta(data)
            setColor({ backgroundColor: colorTipo[data.id].color });            
            setNombre(data.name)
            setCargando(false)            
        });
      }, []);
    
      return (
        !cargando && (
          <article className='card-lista card-tipo' style={{ backgroundColor: color.backgroundColor }}>            
            <img src={require(`../../assets/icons/${nombre}.svg`)} alt='Tipo icono' className='icono-tipo'/>
            <h1>{nombre}</h1>
          </article>
        )
      );      
}