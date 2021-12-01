import { StarOutlined } from "@ant-design/icons"
import { NavLink } from "react-router-dom"
import '../ProductDetail.css'
import Productdetail from './Product.js'
export default function Product(props) {
    console.log(props)
    return (
        <>
        
        <div className='link'>
        <p><NavLink className='detail-link' to={`/`} > Home/</NavLink>  </p>
        <p><NavLink className='detail-link' to={`/products`}> Products/</NavLink> </p>
        <p><NavLink className='detail-link last-link' to={`/${props.data.category}`}> {props.data.category}/</NavLink></p>
        <br/><p>{props.data.title}</p>
        </div>
        <div className="productdetail">
        <Productdetail data={props.data} />  
        </div>
        </>
    )
}