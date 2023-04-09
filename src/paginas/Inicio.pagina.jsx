import { useEffect, useState, useRef } from "react";
import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useAppDispatch, useAppSelector } from "../componentes/redux/hooks";
import { getAllCharacters, getSingleCharacter, actionFiltrar, actionLimpiarFiltro  } from "../componentes/redux/personajeSlice";
import useFav from "../componentes/hooks/useFav";
 
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
    const { personajes, error, loading, fav } = useAppSelector((state) => state.personajes);
    const totalPage = useAppSelector((state) => state.personajes.metData.pages);
    const filtrar = useAppSelector((state) => state.personajes.filtro)
    const [search, setSearch] = useState(filtrar);
    const inputRef = useRef (null);
    const { favClick } = useFav();


    useEffect(() => {
        dispatch(actionFiltrar(search))
        dispatch(getSingleCharacter(search));
    }, [search, dispatch])

    /**
     * FUNTION: Se obtiene el listado de los personajes
    */

    useEffect(() => {
        dispatch(getAllCharacters(page));
        inputRef?.current?.focus();
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

    // Clear filtro
    const clearFilter = ()=> {
        setSearch('');
        dispatch(actionLimpiarFiltro());
        inputRef?.current?.focus();
        dispatch(getAllCharacters(1));
    }

    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger" onClick={clearFilter}>Limpiar</button>
        </div>
        <Filtros inputRef={inputRef} searchCharacter={(e)=>setSearch(e.target.value)} value={search} />
        <Paginacion prevPage={prevPage} nextPage={nextPage} disablePrev={page === 1} disableNext={page === totalPage} />
        { error && ( <h2>No se encontro el personaje</h2>) }
        { loading && ( <h2>Cargando</h2> ) }
        { !error && !loading && (
            <>
                <GrillaPersonajes personajes={personajes} fav={fav} favClick={favClick} />
            </>
        ) }
        <Paginacion prevPage={prevPage} nextPage={nextPage} disablePrev={page === 1} disableNext={page === totalPage} />
    </div>
}

export default PaginaInicio