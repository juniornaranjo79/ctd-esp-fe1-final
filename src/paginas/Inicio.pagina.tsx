import { useEffect, useState, useRef } from "react";
import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useAppDispatch, useAppSelector } from "../componentes/redux/hooks";
import { getAllCharacters, getSingleCharacter, actionFiltrar, actionLimpiarFiltro  } from "../componentes/redux/personajeSlice";
import useFav from "../componentes/hooks/useFav";


/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros que contienen el input para filtrar, junto con la grilla de personajes.
 * @returns {JSX.Element} Retorna un JSX element que es la pagina de inicio que contiene los diferentes componentes para hacerla funcional
*/

const PaginaInicio = () => {
    const [page, setPage] = useState<number>(1);
    const dispatch = useAppDispatch();
    const { personajes, error, loading, fav } = useAppSelector((state) => state.personajes);
    const totalPage = useAppSelector((state) => state.personajes.metData.pages);
    const filtrar = useAppSelector((state) => state.personajes.filtro);
    const [search, setSearch] = useState<string>(filtrar);
    const inputRef = useRef<HTMLInputElement> (null);
    const { favClick } = useFav();

    //FUNCION: TRAE LOS CHARACTER FILTRADOS EN EL INPUT DE FILTRO
    useEffect(() => {
        dispatch(actionFiltrar(search))
        dispatch(getSingleCharacter(search));
    }, [search, dispatch])

    
    //FUNCION: SE OBTIENE EL LISTADO DE TODOS LOS PERSONAJES
    useEffect(() => {
        dispatch(getAllCharacters(page));
        inputRef?.current?.focus();
    }, [page, dispatch])

    
    //FUNTION: PAGINADO DE LA GRILLA DE LOS PERSONAJES
    const prevPage = () => {
    setPage((page) => page - 1);
    };

    const nextPage = () => {
        setPage((page) => page + 1);
    };

    //FUNTION: QUE LIMPIA EL FILTRO
    const clearFilter = ()=> {
        setSearch('');
        dispatch(actionLimpiarFiltro());
        inputRef?.current?.focus();
        dispatch(getAllCharacters(1));
    }

    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger" onClick={ clearFilter }>Limpiar</button>
        </div>
        <Filtros inputRef={ inputRef } searchCharacter={(e)=>setSearch(e.target.value)} value={ search } />
        <Paginacion prevPage={ prevPage } nextPage={ nextPage } disablePrev={ page === 1 } disableNext={ page === totalPage } />
        { error && ( <h2>No se encontro el personaje</h2>) }
        { loading && ( <h2>Cargando</h2> ) }
        { !error && !loading && (
            <>
                <GrillaPersonajes personajes={ personajes } fav={ fav } favClick={ favClick } />
            </>
        ) }
        <Paginacion prevPage={ prevPage } nextPage={ nextPage } disablePrev={ page === 1 } disableNext={ page === totalPage } />
    </div>
}

export default PaginaInicio