import { Skeleton } from "@mui/material"
import { Box } from "@mui/system"
import Button from "@restart/ui/esm/Button"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Cart from "../components/Cart"
import { deleteCart } from "../data/cartAPI"
import { fetchCartproducts } from "../features/cartSlice"
import ProductAPI from '../data/productAPI'
import '../style/CartScreen.css' 

export default function CartScreen(){
    
    const dispatch = useDispatch();
    const cart = useSelector(state => state.usercart);
    const [subtotal, setSubtotal] = useState(0);
    useEffect(() => {
      const fetchData = async () => {
        if(cart?.data[0]?.products?.length > 0) {
            let subtotal = 0;
            for(let i of cart?.data[0]?.products) {
                const res = await ProductAPI.getProductByIdAPI(i.productId);
                subtotal += res.data.price * i.quantity;
            }
            setSubtotal(subtotal);
        }else{
            setSubtotal(0);
        }
      }
      fetchData();
    },[cart])

    const handleDelete = () => {
        dispatch(deleteCart(cart.id));
    }
    return (
        <div className="cart-screen">
            <div className="cart-item-container">
                <div>
                    <Button onClick={handleDelete}>Delete Cart</Button>
                </div>
                {cart?.data[0]?.products?.length > 0  
                ? cart?.data[0]?.products?.map((i, index) => {
                    console.log(i)
                    return(
                    
                    <Cart items={i} key={index} cartDetails/>
                )}) 
                : <p >Your cart is empty</p>
                }
            </div>
            <div className="sum-price-container">
                <p >Order Summary</p>
                <div >
                    <span>Subtotal </span>
                    <span> $ {subtotal || 0}</span>
                </div>
                <div >
                    <span>Estimated Shipping</span> 
                    <span> $ 5,9</span>
                </div>
                <div >
                    <span>Shipping Discount</span> 
                    <span> $ 5,9</span>
                </div>
                <div >
                    <span>Total </span>
                    <span> $ {subtotal || 0}</span>
                </div>
                <div >
                    <Button >CHECK OUT NOW</Button>
                </div>
            </div>
        </div>
    )
}