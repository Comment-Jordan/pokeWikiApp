import { useEffect, useState } from "react";
import { Link, matchPath } from "react-router-dom";

import { colorTipo } from "../../utils/Diccionario";

export default function CardTipo({ urlConsulta }){
    
  const [color, setColor] = useState({})
  const [cargando, setCargando] = useState(true)
  const [nombre, setNombre] = useState("")       
  const [id, setId] = useState(0);

  useEffect(() => {
    fetch(urlConsulta)
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        setId(data.id)
        setColor({ backgroundColor: colorTipo[data.id].color });            
        setNombre(data.name)
        setCargando(false)            
    });
  }, []);

  return (
    !cargando && (
      <article className='card-lista card-tipo' style={{ backgroundColor: color.backgroundColor }}>            
        <img src={require(`../../assets/icons/${nombre}.svg`)} alt='Tipo icono' className='icono-tipo'/>
        <Link to={`/infoTipo/${id}`} className='text-nav item-nav'>{nombre}</Link>
      </article>
    )
  );      
}