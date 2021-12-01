import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userAPI from "../data/userAPI";

export const fetchUser = createAsyncThunk(
    'user/fetch',
    async({username, password},thunkAPI)=>{
        try {
            const response = await userAPI.getUsertoken(username, password)
            console.log(username + '/'+password)
            console.log('user fetch',response.data)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const fetchLocal = createAsyncThunk(
    'user/fetchlocal',
    async(id,thunkAPI)=>{
        try {
            const response = await userAPI.getUserById(id)
            //console.log(response.data)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)
const initialState= {
    data:[],
    loaded:'idle',
    error: null
}
const userSlice= createSlice({
    name: 'user',
    initialState,
    reducers:{
        logout: (state)=>{
            localStorage.removeItem('user');
            console.log('user store state ',state)
            state=initialState;
            console.log('user store state after ',state)
            return {...state}
        }     
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchUser.pending,(state)=>{
            state.loaded='loading'
            console.log(state.loaded)
        })
        builder.addCase(fetchUser.fulfilled,(state,action)=>{
            state.loaded='fulfilled'
            state.data= action.payload
            if(localStorage.getItem('user')===null){
                localStorage.setItem('user',(action.payload.id))  
            }
            console.log(state.data)
        })
        builder.addCase(fetchUser.rejected,(state,action)=>{
            state.loaded='rejected'
            //console.log(state.loaded)
            state.error=action.payload
        })
        builder.addCase(fetchLocal.pending,(state)=>{
            state.loaded='loading'
            //console.log(state.loaded)
        })
        builder.addCase(fetchLocal.fulfilled,(state,action)=>{
            state.loaded='fulfilled'
            state.data= action.payload
            //console.log(state.data)
        })
        builder.addCase(fetchLocal.rejected,(state,action)=>{
            state.loaded='rejected'
            state.error=action.payload
            console.log(state.loaded)
        })
    }
})
export const {logout} = userSlice.actions
export default userSlice.reducer