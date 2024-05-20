
export default function Navhome(){
    return(
        // TODO Permitir la traduccion de idioma
        <section className='nav'>
            <section className='container-nav-home'>            
                <section className='container-navDescription'>
                    <h1 className='text-nav title'>POKE APP 2</h1>
                </section>
                
                <section className='container-opciones'>
                    <h2 className='text-nav item-nav'>Pokedex</h2>
                    <h2 className='text-nav item-nav'>Movimientos</h2>
                    <h2 className='text-nav item-nav'>Tipos</h2>
                    <h2 className='text-nav item-nav'>Listado</h2>
                </section>            
            </section>
        </section>
    );
}