import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

interface Personaje {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
        name: string;
        url: string;
    },
    location: {
        name: string;
        url: string;
    },
    image: string;
    episode: [string];
    url: string;
    created: string;
}

interface initialType {
    personajes: Personaje[]
    loading: boolean
}
/**
 * @function getPesonajes
 * Esta funcion trae todos los personajes de la API y los limita a 9
 * 
*/
export const getPesonajes = createAsyncThunk(
    'personajes',
    async (page: number) => {
        const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}&limit=9`)
        const parseRes = await res.json()
        const result = parseRes
        //console.log(result)
        return result
    }
)


const initialState: initialType = {
    //metaData: {count: 0, pages: 1, next: "", prev: ""},
    personajes: [],
    loading: false
}

const personajesSlice = createSlice({
    name: 'personajes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getPesonajes.pending, (state) => {
            state.loading = true
        })
        .addCase(getPesonajes.fulfilled, (state, action) => {
            state.loading = false
            state.personajes= action.payload.results
            //state.metaData= action.payload.info
        })
        .addCase(getPesonajes.rejected, (state, action) => {
            state.loading = false
        }) 
    }
})

export default personajesSlice.reducer
