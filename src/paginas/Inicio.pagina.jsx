import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../componentes/redux/hooks";
import { getPesonajes } from "../componentes/redux/personajeSlice";
 
/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */
const PaginaInicio = () => {
    const [page, setPage] = useState(1);
    const dispatch = useAppDispatch();
    const personajes = useAppSelector((state)=> state.personajes.personajes);

    /**
     * Se obtiene el listado de los personakas limitados a 9 
    */

    useEffect(()=>{
        dispatch(getPesonajes(page));
    }, [page, dispatch])


    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger">Test Button</button>
        </div>
        <Filtros />
        <Paginacion />
        <GrillaPersonajes personajes={personajes} />
        <Paginacion />
    </div>
}

export default PaginaInicio