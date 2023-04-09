import './boton-favorito.css';
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * 
 * @returns un JSX element 
 */
const BotonFavorito = ({isFav, onStarclick}) => {
    const src = isFav ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    return <div className="boton-favorito" onClick={onStarclick}>
        <img src={src} alt={"favorito"} />
    </div>
}

export default BotonFavorito;