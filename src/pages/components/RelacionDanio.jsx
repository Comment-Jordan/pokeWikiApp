
import CardTipo from "./CardTipo";

export default function RelacionDanio({ datos }){

    let urlDobleDesventaja=[];
    for(let i=0; i<datos.double_damage_from.length;i++){
        urlDobleDesventaja.push(datos.double_damage_from[i].url);
    } 

    let urlDobleEfectividad=[];
    for(let i=0; i<datos.double_damage_to.length;i++){
        urlDobleEfectividad.push(datos.double_damage_to[i].url);
    } 

    let urlMedioDanio=[];
    for(let i=0; i<datos.half_damage_from.length;i++){
        urlMedioDanio.push(datos.half_damage_from[i].url);
    } 

    let urlMedioEfectividad=[];
    for(let i=0; i<datos.half_damage_to.length;i++){
        urlMedioEfectividad.push(datos.half_damage_to[i].url);
    }

    let urlCeroEficiencia=[];
    for(let i=0; i<datos.no_damage_from.length;i++){
        urlCeroEficiencia.push(datos.no_damage_from[i].url);
    } 

    let urlInmunidad=[];
    for(let i=0; i<datos.no_damage_to.length;i++){
        urlInmunidad.push(datos.no_damage_to[i].url);
    } 

    return(
        <article>            
            {urlDobleDesventaja.length > 0 && (
                <div>
                    <h1>Doble daño con: </h1>
                        {urlDobleDesventaja.map((item, index) => (
                            <CardTipo urlConsulta={urlDobleDesventaja[index]} />
                            
                        ))}
                </div>
            )}

            {urlDobleEfectividad.length > 0 && (
                <div >
                    <h1>Doble efectividad con: </h1>
                        {urlDobleEfectividad.map((item, index) => (
                            <CardTipo urlConsulta={urlDobleEfectividad[index]} />
                        ))}
                </div>
            )}

            {urlMedioDanio.length > 0 && (
                <div >
                    <h1>Doble daño con: </h1>
                        {urlMedioDanio.map((item, index) => (
                            <CardTipo urlConsulta={urlMedioDanio[index]} />
                        ))}
                </div>
            )}
            
            {urlMedioDanio.length > 0 && (
                <div >
                    <h1>Resistencia: </h1>
                        {urlMedioDanio.map((item, index) => (
                            <CardTipo urlConsulta={urlMedioDanio[index]} />
                        ))}
                </div>
            )}

            {urlMedioEfectividad.length > 0 && (
                <div >
                    <h1>Medio daño a: </h1>
                        {urlMedioEfectividad.map((item, index) => (
                            <CardTipo urlConsulta={urlMedioEfectividad[index]} />
                        ))}
                </div>
            )}

            {urlCeroEficiencia.length > 0 && (
                <div >
                    <h1>Medio daño a: </h1>
                        {urlCeroEficiencia.map((item, index) => (
                            <CardTipo urlConsulta={urlCeroEficiencia[index]} />
                        ))}
                </div>
            )}

            {urlInmunidad.length > 0 && (
                <div >
                    <h1>Inmunidad: </h1>
                        {urlInmunidad.map((item, index) => (
                            <CardTipo urlConsulta={urlInmunidad[index]} />
                        ))}
                </div>
            )}         
        </article>
    );
}