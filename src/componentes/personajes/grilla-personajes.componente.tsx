import { Personaje } from '../hooks/type';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';


/**
 * Componente que contiene las tarjetas de los personahes en una grilla
 * @param {Object} Props Son las propiedades del componente
 * @param {array<Object>} Props.personajes trae un array con el listado de los personajes
 * @param {function} Props.favClick Este sirve para el manejo del evento en el btn de si es fav o no
 * @param {array<number>} Props.fav Va listando lo personajes favoritos en un array segun su Id
 * @returns {JSX.Element} Retorna un JSX element que es el componente que contiene el listado de los personajes en una grilla
*/

interface Props {
    personajes: Personaje[];
    favClick : (id:number) => void;
    fav: number[]; 
}

const GrillaPersonajes = ({ personajes, favClick, fav }: Props) => {
    console.log('personajes', personajes);

    return (
        <div className='grilla-personajes'>
            { personajes?.map((personaje)=>(
                <TarjetaPersonaje 
                    key={ personaje.id } 
                    name={ personaje.name } 
                    image={ personaje.image } 
                    favClick={ ()=> favClick(personaje.id) } 
                    isFav={ fav.some((fav)=> fav===personaje.id) } 
                />
            )) }         
        </div>
    );
};

export default GrillaPersonajes;
