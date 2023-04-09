import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { actionUpdateFav } from "../redux/personajeSlice";

const useFav = () => {
    const dispatch =useAppDispatch();
    const fav = useAppSelector((state) => state.personajes.fav)
    
    const favClick = (id:number) => {
        const idExist = fav.some((fav) => fav === id);
        if (idExist) {
            const updateId = fav.filter((fav) => fav !== id);
            dispatch(actionUpdateFav(updateId));
        } else {
            dispatch(actionUpdateFav([...fav, id]));
        }
    };

    return { favClick }
}
export default useFav;