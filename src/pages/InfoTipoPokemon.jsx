
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { colorTipo } from '../utils/Diccionario';
import { DEFINICION_TIPOS } from '../utils/Diccionario';
import RelacionDanio from './components/RelacionDanio';
import { ConstantNodeDependencies } from 'mathjs';

export default function InfoTipoPokemon(){
    let { id } = useParams();
    const descripcionTipo = DEFINICION_TIPOS.espaniol[id]
    const [nombre, setNombre] = useState("")
    const [color, setColor] = useState({})
    const [cargando, setCargando] = useState(true)
    const [relacionDanio, setRelacionDanio] = useState({})
    
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/type/${id}`)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            setNombre(data.name)
            setColor({ backgroundColor: colorTipo[data.id].color });            
            setRelacionDanio(data.damage_relations)
            setCargando(false)
        });
    }, [id]);


    return(
        !cargando &&( 
            <article className='conteiner-page page-info-tipo'>
                <img src={require(`../assets/icons/${nombre}.svg`)} alt='Tipo icono' className='icono-tipo' style={{ backgroundColor: color.backgroundColor }}/>
                <aside>
                    <h1>Tipo {nombre}</h1>
                    <p>{descripcionTipo}</p>
                    {/* <h1>Clase de tipo de daño:</h1> */}
                    <h1>Relaci&oacute;n de daño:</h1>
                    <hr/>
                    <RelacionDanio datos={relacionDanio}/>
                </aside>
            </article>
        )
    );
}