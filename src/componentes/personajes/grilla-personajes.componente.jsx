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
const GrillaPersonajes = ({ personajes }) => {
    console.log('personajes', personajes);

    return (
        <div className='grilla-personajes'>
            {personajes?.map((personaje)=>(
                <TarjetaPersonaje key={personaje.id} name={personaje.name} image={personaje.image} />
            ))}

            
        </div>
    );
};

export default GrillaPersonajes;
