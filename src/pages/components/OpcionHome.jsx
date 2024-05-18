
export default function OpcionHome({titulo='',area, url}){
    //TODO: Agregar redireccionamiento con toLink
    const gridArea = {
        gridArea: area
    };
    return(
        <section className='card item-home' style={gridArea}>
            <h1 className='titulo-home'>{titulo}</h1>            
        </section>
    );
}