
import OpcionHome from "./components/OpcionHome"

const OPCIONES={
    pokedex:"Pokedex",
    lista:"Listado Pokemon",
    tipos:"Tipos Pokemon",
    movimientos:"Movimientos"
};

const URLS={
    pokedex:'/pokedex',
    listadoTipos:'/listadoTipos',
    listadoPokemon:'/listadoPokemon',
    listadoMovimientos:'/listadoMovimientos'
}

export default function Home(){
    return(        
        
        <div className='container-home'>
            <OpcionHome url={URLS.pokedex} titulo={OPCIONES.pokedex} area="a"/>
            <OpcionHome url={URLS.listadoPokemon} titulo={OPCIONES.lista} area="b"/>
            <OpcionHome url={URLS.listadoTipos} titulo={OPCIONES.tipos} area="c"/>
            <OpcionHome url={URLS.listadoMovimientos} titulo={OPCIONES.movimientos} area="d"/>
        </div>        
    );
}