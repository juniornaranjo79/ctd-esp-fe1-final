import { useEffect, useState } from "react";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import {  useAppDispatch, useAppSelector } from "../componentes/redux/hooks";
import { actionLimpiarFav } from "../componentes/redux/personajeSlice";
import useFav from "../componentes/hooks/useFav";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {

    const fav = useAppSelector((state)=> state.personajes.fav);
    const [listFav, setListFav] = useState([]);
    const dispatch = useAppDispatch();
    const { favClick } = useFav();


    useEffect(() => {
        if(fav.length > 0 ){
            fetch(`https://rickandmortyapi.com/api/character/${fav}`)
                .then((res) => res.json())
                .then((result) => {
                    if (Array.isArray(result)) {
                        setListFav(result);
                    } else {
                        setListFav([result]);
                    }
                });
        }
    }, [fav]);

    const clearFav = ()=> {
        dispatch(actionLimpiarFav())
    }

    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger" onClick={clearFav}>Limpiar</button>
        </div>
        {fav.length > 0 ? (
            <GrillaPersonajes fav={fav} personajes={listFav} favClick={favClick} />
        ) : (<h2>No tiene personajes favoritos</h2>)}
    </div>
}



export default PaginaFavoritos