import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import productsAPI from "../data/productAPI";
import { fetchCartproducts } from "../features/cartSlice"
import '../CartItem.css' 

export default function Cart({items,cartDetails}){
    const [product, setProduct] = useState(null);
    useEffect(() => {
        const fetchItems = async() => {
           if(items.productId !== undefined){
                const res = await productsAPI.getProductByIdAPI(items.productId);
                if(res.status === 200){
                    setProduct(res.data);
                }
           }
        }
        fetchItems();
    },[items.productId])
    if(!product) return null;
    return (
        <div className='cart-item'>
            <div className='cart-item-info'>
                <img src={product.image} alt={product.title} />
                <div>
                    <span>{product.title.substring(0, 8)}</span>
                    <span>$ {product.price}</span>
                </div>
            </div>
            {cartDetails
            ? <div >
               <span> x {items.quantity}</span>
               <span>$ {items.quantity * product.price}</span>
            </div>
            :<div>
                x {items.quantity}
            </div>}
        </div>
    )
}