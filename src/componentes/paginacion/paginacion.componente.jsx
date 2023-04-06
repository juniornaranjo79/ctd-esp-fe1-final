import './paginacion.css';

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion = ({disablePrev, disableNext, prevPage, nextPage}) => {

    return <div className="paginacion">
        <button disabled={disablePrev} className={"primary"} onClick={prevPage}>Anterior</button>
        <button disabled={disableNext} className={"primary"} onClick={nextPage}>Siguiente</button>
    </div>
}

export default Paginacion;