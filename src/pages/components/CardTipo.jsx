import { useEffect, useState } from "react";
import { Link, matchPath } from "react-router-dom";
import { useParams } from 'react-router-dom';

import { colorTipo } from "../../utils/Diccionario";
import InfoTipoPokemon from "../InfoTipoPokemon";

export default function CardTipo({ urlConsulta }){
    
  let { idParams } = useParams();
  const [color, setColor] = useState({})
  const [cargando, setCargando] = useState(true)
  const [nombre, setNombre] = useState("")       
  const [id, setId] = useState(0);

  useEffect(() => {
    fetch(urlConsulta)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setId(data.id)
        setColor({ backgroundColor: colorTipo[data.id].color });            
        setNombre(data.name)
        setCargando(false)            
    });
  }, [idParams]);

  return (
    !cargando && (
      <article className='card-lista card-tipo' style={{ backgroundColor: color.backgroundColor }}>            
        <img src={require(`../../assets/icons/${nombre}.svg`)} alt='Tipo icono' className='icono-tipo'/>
        <Link to={`/infoTipoPokemon/${id}`} className='text-card-tipo'>{nombre}</Link>
      </article>
    )
  );      
}