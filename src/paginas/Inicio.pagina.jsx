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
    const totalPage = useAppSelector((state) => state.personajes.metData.pages);

    /**
     * FUNTION: Se obtiene el listado de los personakas limitados a 9 
    */

    useEffect(()=>{
        dispatch(getPesonajes(page));
    }, [page, dispatch])

    /**
     * FUNTION: paginado de las vistas
    */

    const prevPage = () => {
    setPage((page) => page - 1);
    };

    const nextPage = () => {
        setPage((page) => page + 1);
    };


    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger">Test Button</button>
        </div>
        <Filtros />
        <Paginacion prevPage={prevPage} nextPage={nextPage} disablePrev={page === 1} disableNext={page === totalPage} />
        <GrillaPersonajes personajes={personajes} />
        <Paginacion prevPage={prevPage} nextPage={nextPage} disablePrev={page === 1} disableNext={page === totalPage} />
    </div>
}

export default PaginaInicio