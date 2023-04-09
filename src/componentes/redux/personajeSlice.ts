import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Info, Personaje } from "../hooks/type";

interface initialType {
    personajes: Personaje[];
    metData: Info;
    filtro: string,
    fav:number[],
    loading: boolean
    error: boolean
    
}

const initialState: initialType = {
    metData: {count: 0, pages: 1, next: "", prev: ""},
    personajes: [],
    filtro: '',
    fav:[],
    loading: false,
    error: false
}


//FUNCION: Esta funcion trae todos los personajes de la API
export const getAllCharacters = createAsyncThunk(
    'personajes',
    async (page: number) => {
        const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
        if(res.ok){
            const parseRes = await res.json()
            const results = parseRes
            return results
        }
        else{
            throw new Error('Pagina no se encuentra')
        }
    }
)


//FUNCION: Esta funcion trae todos los personajes de la API filtrado por el name
export const getSingleCharacter = createAsyncThunk(
    'personaje',
    async (name:string) => {
        const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
        if(res.ok){
            const parseRes = await res.json()
            const results = parseRes
            return results
        }
        else{
            throw new Error('Pagina no se encuentra')
        }
    }
)


const personajeSlice = createSlice({
    name: 'personajes',
    initialState,
    reducers: {
        actionFiltrar: (state, action) => {
            state.filtro = action.payload
        },
        actionLimpiarFiltro: (state) => {
            state.filtro = ''
        },
        actionUpdateFav: (state, action) => {
            state.fav = action.payload
        },
        actionLimpiarFav: (state) =>{
            state.fav = []
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllCharacters.pending, (state) => {
                state.loading = true
                state.error = false
                state.personajes = []
            })
            .addCase(getAllCharacters.fulfilled, (state, action) => {
                state.loading = false
                state.error = false
                state.personajes = action.payload.results
                state.metData = action.payload.info
            })
            .addCase(getAllCharacters.rejected, (state, action) => {
                state.loading = false
                state.error = false
                state.personajes = []
            })
            .addCase(getSingleCharacter.pending, (state) => {
                state.loading = true
                state.error = false
                state.personajes = []
            })
            .addCase(getSingleCharacter.fulfilled, (state, action) => {
                state.loading = false
                state.error = false
                state.personajes = action.payload.results
                state.metData = action.payload.info
            })
            .addCase(getSingleCharacter.rejected, (state, action) => {
                state.metData.pages = 1
                state.loading = false
                state.error = true
                state.personajes = []
            })  
    }
})

export const {  actionFiltrar, actionLimpiarFiltro, actionUpdateFav, actionLimpiarFav } = personajeSlice.actions

export default personajeSlice.reducer
