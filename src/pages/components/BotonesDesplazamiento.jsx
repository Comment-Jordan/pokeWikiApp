export default function BotonesDesplazamiento( { funcAnterior, funcInicio, funcSiguiente } ){
    return(
        <div className='conteiner-botones-desplazamiento'>
            <button className='boton-desplazamiento' onClick={funcAnterior}>Aterior</button>
            <button className='boton-desplazamiento' onClick={funcInicio}>Inicio</button>
            <button className='boton-desplazamiento' onClick={funcSiguiente}>Siguiente</button>
        </div>
    );
}