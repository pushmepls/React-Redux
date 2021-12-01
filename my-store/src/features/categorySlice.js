import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoriesAPI from '../data/categoryAPI'

export const fetchCategories= createAsyncThunk(
    'categories/fetch',
    async(thunkAPI,{rejectWithValue})=>{
        try{
            const response = await categoriesAPI.getCategoryAPI()
            //console.log(reponse)
            return response.data    
        }
        catch(error){
            return rejectWithValue(error);
        }
    }
)

// export function storeUpdate(storeState, data)
// {      
//     let array = storeState.concat(data);
//     var a = array.concat();
//     console.log('this is category :',a)
//     for(var i=0; i<a.length; ++i) {
//         for(var j=i+1; j<a.length; ++j) {
//             if(a[i] === a[j])
//                 a.splice(j--, 1);
//         }
//     }
//     console.log(a)
//     return a;    
// }

const categoriesSlice = createSlice({
    name:'categories',
    initialState: {
        data:[],
        loaded:'idle',
        error: null
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(fetchCategories.pending,(state,action)=>{
            state.loaded='loading'
        })
        builder.addCase(fetchCategories.fulfilled,(state,action)=>{
            state.loaded='fulfilled'
            //console.log(action.payload)
            state.data= action.payload         
        })
        builder.addCase(fetchCategories.rejected,(state,action)=>{
            state.loaded='rejected'
            console.log(state.error)
        })
    }
})

export default categoriesSlice.reducer