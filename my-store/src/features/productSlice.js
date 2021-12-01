import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productsAPI from '../data/productAPI'
// import manageMerge from "./storeUpdate";

export const fetchProducts = createAsyncThunk(
    'products/fetch',
    async(thunkAPI,{rejectWithValue}) => {
        try{
            const response= await productsAPI.getProductsAPI()
            //console.log(response)
            return response
        } catch(error){
            return rejectWithValue(error.message)
        }    
    }
) 
const initialState={
    data:[],
    loaded:'idle',
    error: null
    }
const productsSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
      
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchProducts.pending,(state,action)=>{
            state.loaded='loading'
            //console.log(JSON.stringify(state))
        })
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{           
            state.loaded='fulfilled'
            // console.log(JSON.stringify(state.data))
            state.data = action.payload
        })
        builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.loaded='rejected'
            state.error=action.error.message
            //console.log(JSON.stringify(state))
            console.log(state.error)
        })
        
    },
})

export default productsSlice.reducer
