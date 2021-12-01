import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartAPI from "../data/cartAPI";
import productAPI from "../data/productAPI";

export const fetchCart=createAsyncThunk(
    'cart/fetch',
    async(id,thunkAPI) => {
        try{
            const response = await cartAPI.getUserCartAPI(id);
            console.log(response.data)
            return response.data
        }
        catch(err){
            return thunkAPI.rejectWithValue(err.message);
        }
    }
)
export const fetchCartproducts=createAsyncThunk(
    'cart/fetchproducts',
    async(id,thunkAPI)=>{
        try{
            const response = await productAPI.getProductByIdAPI(id);
            console.log(response.data)
            return response.data
        }
        catch(error){
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)
const initialState={
    data:[],
    cartproducts:[],
    loaded:'idle',
    error:null,
}
const cartSlice = createSlice({
    name : 'usercart',
    initialState ,
    reducers:{
        logoutCart:(state)=>{
            state=initialState
            console.log('user cart state',state)
            return{...state}
        },
        addNewProduct : (state, action) => {
            state.data[0].products=action.payload
            console.log(action.payload)
            
        },
        createNewCart : (state, action) => {
            state.data = action.payload;
            
        },
        // setcartproductsempty: (state, action) => {
        //     state.products=[]
        // }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchCart.pending,(state,action)=>{
            state.loaded='loading'
        })
        builder.addCase(fetchCart.fulfilled,(state,action)=>{
            state.loaded='fulfilled'
            state.data=action.payload
            console.log('fetch cart :',state.data)
        })
        builder.addCase(fetchCart.rejected,(state,action)=>{
            state.loaded='rejected'
            state.error=action.payload
        })
        builder.addCase(fetchCartproducts.pending,(state,action)=>{
            state.loaded='loading'
        })
        builder.addCase(fetchCartproducts.fulfilled,(state,action)=>{
            state.loaded='fulfilled'
            state.data=state.cartproducts.concat(action.payload)
            console.log('fetch product :',state.cartproducts)
        })
        builder.addCase(fetchCartproducts.rejected,(state,action)=>{
            state.loaded='rejected'
            state.error=action.payload
        })    
    }
})
export const {logOutCart, addNewProduct, createNewCart, setcartproductsempty} = cartSlice.actions;
export default cartSlice.reducer
