import './boton-favorito.css';


interface Props {
    isFav: boolean;
    onStarclick: ()=> void;
}

/**
 * Componente de btn que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * @param {Object} Props Son las propiedades del componente
 * @param {boolean} Props.isFav Indica si el elemento es favorito o no
 * @param {function} Props.onStarclick Este sirve para el manejo del evento en el btn de fav 
 * @returns {JSX.Element} Retorna un JSX element que es el componente que contiene el btn de favorito y la funcion del onClick 
*/

const BotonFavorito = ({ isFav, onStarclick }: Props) => {
    const src = isFav ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    return <div className="boton-favorito" onClick={onStarclick}>
        <img src={ src } alt={ "favorito" } />
    </div>
}

export default BotonFavorito;