import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {
    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger">Test Button</button>
        </div>
        <GrillaPersonajes />
    </div>
}

// useEffect(() => {
//     if (favoritos.length > 0) {
//         fetch(`https://rickandmortyapi.com/api/character/${favoritos}`)
//             .then((res) => res.json())
//             .then((result) => {
//                 setListFavoritos(result);
//             });
//     }
// }, [favoritos]);

export default PaginaFavoritos