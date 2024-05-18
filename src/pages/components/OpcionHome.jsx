
import { Link } from "react-router-dom";

export default function OpcionHome({ url='/',titulo='',area}){    
    const gridArea = {
        gridArea: area
    };
    return(
        <section className='card item-home' style={gridArea}>
            <Link to={url} className='titulo-home'>{titulo}</Link>
        </section>
    );
}