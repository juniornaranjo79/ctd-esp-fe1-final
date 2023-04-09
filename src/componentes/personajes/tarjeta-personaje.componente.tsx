import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';

/**
 * Componente que contiene las tarjetas de los personajes
 * @param {Object} Props Son las propiedades del componente
 * @param {string} Props.name este es la info del name del personaje
 * @param {string} Props.image esta es la url que trae la imagen del personaje
 * @param {function} Props.favClick Este sirve para el manejo del evento en el btn de si es fav o no
 * @param {boolean} Props.isFav Este sirve mostrar si el personaje es fav o no
 * @returns {JSX.Element} Retorna un JSX element que es el componente que contiene la info del personaje como informacion del mismo y el btn de si es fav o no
*/

interface Props {
    name: string;
    image: string;
    favClick: () => void;
    isFav: boolean
}

const TarjetaPersonaje = ({ name, image, favClick, isFav }: Props) => {

    return <div className="tarjeta-personaje">
        <img src={ image } alt={name}/>
        <div className="tarjeta-personaje-body">
            <span>{ name }</span>
            <BotonFavorito isFav={ isFav }  onStarclick={ favClick } />
        </div>
    </div>
}

export default TarjetaPersonaje;