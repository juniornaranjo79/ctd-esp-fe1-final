import './paginacion.css';

/**
 * Componente que contiene los btn para paginar
 * @param {Object} Props Son las propiedades del componente
 * @param {boolean} Props.disablePrev Indica si el btn esta deshabilitado segun en la pagina que se encuentre en este caso es la anterior
 * @param {boolean} Props.disableNext Indica si el btn esta deshabilitado segun en la pagina que se encuentre en este caso es la siguiente
 * @param {function} Props.prevPage Este sirve para el manejo del evento en el btn de anterior
 * @param {function} Props.nextPage Este sirve para el manejo del evento en el btn de siguiente
 * @returns {JSX.Element} Retorna un JSX element que es el componente que contiene el btn del paginado y la funcion del onClick 
*/

interface Props {
    disablePrev: boolean ;
    disableNext: boolean ;
    prevPage: ()=> void ;
    nextPage: ()=> void ;
} 

const Paginacion = ({ disablePrev, disableNext, prevPage, nextPage }: Props) => {

    return <div className="paginacion">
        <button disabled={ disablePrev } className={ "primary" } onClick={ prevPage }>Anterior</button>
        <button disabled={ disableNext } className={ "primary" } onClick={ nextPage }>Siguiente</button>
    </div>
}

export default Paginacion;