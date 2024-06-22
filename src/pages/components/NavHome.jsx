
import { Link } from "react-router-dom";

export default function Navhome(){
    return(
        <section className='nav'>
            <section className='container-nav-home'>            
                <section className='container-navDescription'>
                    {/* <h1 className='text-nav title'>POKE APP 2</h1> */}
                    <Link to='/' className='text-nav logo'>POKE APP 2</Link>
                </section>
                
                <section className='container-opciones'>
                    <Link to='/infoPokemon/1' className='text-nav item-nav'>Pokedex</Link>
                    <Link to='/listadoPokemon' className='text-nav item-nav'>Listado</Link>
                    <Link to='/listadoMovimientos' className='text-nav item-nav'>Movimientos</Link>
                    <Link to='/infoTipo' className='text-nav item-nav'>Tipos</Link>
                </section>            
            </section>
        </section>
    );
}