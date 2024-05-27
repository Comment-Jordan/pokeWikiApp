
import { Link } from "react-router-dom";

export default function Navhome(){
    return(
        // TODO Permitir la traduccion de idioma
        <section className='nav'>
            <section className='container-nav-home'>            
                <section className='container-navDescription'>
                    <h1 className='text-nav title'>POKE APP 2</h1>
                </section>
                
                <section className='container-opciones'>
                    <Link to='/' className='text-nav item-nav'>Pokedex</Link>
                    <Link to='/' className='text-nav item-nav'>Listado</Link>
                    <Link to='/' className='text-nav item-nav'>Movimientos</Link>
                    <Link to='/listadoPokemon' className='text-nav item-nav'>Tipos</Link>
                </section>            
            </section>
        </section>
    );
}