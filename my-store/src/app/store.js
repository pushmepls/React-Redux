import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/productSlice';
import categoriesReducer from '../features/categorySlice';
import userReducer from '../features/userSlice';
import currentproductReducer from '../features/currentproductSlice'
import ProductsByCategoryReducer from '../features/productsbycategorySlice';
import CartReducer from '../features/cartSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    user: userReducer,
    currentproduct: currentproductReducer,
    productsbycategory: ProductsByCategoryReducer,
    usercart: CartReducer,
  },
});
 