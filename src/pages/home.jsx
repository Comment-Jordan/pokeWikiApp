
import Navhome from "./components/NavHome";
import OpcionHome from "./components/OpcionHome"

const OPCIONES={
    pokedex:"Pokedex",
    lista:"Listado Pokemon",
    tipos:"Tipos Pokemon",
    movimientos:"Movimientos"
};

export default function Home(){
    return(
        <>
            <OpcionHome titulo={OPCIONES.pokedex} area="a"/>
            <OpcionHome titulo={OPCIONES.lista} area="b"/>
            <OpcionHome titulo={OPCIONES.tipos} area="c"/>
            <OpcionHome titulo={OPCIONES.movimientos} area="d"/>
        </>
    );
}