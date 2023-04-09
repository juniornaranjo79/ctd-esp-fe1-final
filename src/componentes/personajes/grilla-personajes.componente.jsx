import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';

/**
 * Grilla de personajes para la pagina de inicio
 *
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 *
 *
 * @returns un JSX element
 */
const GrillaPersonajes = ({ personajes, favClick, fav }) => {
    console.log('personajes', personajes);

    return (
        <div className='grilla-personajes'>
            {personajes?.map((personaje)=>(
                <TarjetaPersonaje 
                    key={personaje.id} 
                    name={personaje.name} 
                    image={personaje.image} 
                    id={personaje.id} 
                    favClick={()=> favClick(personaje.id)} 
                    isFav={fav.some((fav)=> fav===personaje.id)} 
                />
            ))}

            
        </div>
    );
};

export default GrillaPersonajes;
