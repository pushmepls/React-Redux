import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import productsAPI from "../data/productAPI"

export const fetchProductById=createAsyncThunk(
    'productsId/fetchById',
    async(id,thunkAPI) => {
        try{
            const response = await productsAPI.getProductByIdAPI(id)
            console.log(response.data)
            return response.data
        }
        catch(error) { 
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

const currentproductSlice= createSlice({
    name:'currentproduct',
    initialState:{
        data:[],
        loaded:'idle',
        error: null
    },
    reducer:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchProductById.pending,(state,action)=>{
            state.loaded='loading'
        })
        builder.addCase(fetchProductById.fulfilled,(state,action)=>{
            state.loaded='fulfilled'
            state.data=action.payload
        })
        builder.addCase(fetchProductById.rejected,(state,action)=>{
            state.error=action.payload
        })
    },
})
export default currentproductSlice.reducer