import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import productsAPI from "../data/productAPI"

export const fetchProductsByCategory=createAsyncThunk(
    'productsCategory/fetchByCategory',
    async(category,thunkAPI) => {
        try{
            const response = await productsAPI.getProductsByCategoryAPI(category)
            console.log(category)
            return response.data
        }
        catch(error) { 
            return thunkAPI.rejectWithValue("error response")
        }
    }
)
const productsbycategorySlice=createSlice({
    name:'productsbycategory',
    initialState:{},
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchProductsByCategory.pending,(state,action)=>{
            state.loaded='loading'
            //console.log(JSON.stringify(state))
        })
        builder.addCase(fetchProductsByCategory.fulfilled,(state,action)=>{           
            state.loaded='fulfilled'
            state.data = action.payload
            //console.log(JSON.stringify(state))
        })
        builder.addCase(fetchProductsByCategory.rejected,(state,action)=>{
            state.loaded='rejected'
            state.error=action.payload
            //console.log(JSON.stringify(state))
            console.log(state.error)
        })
    }
})
export default productsbycategorySlice.reducer