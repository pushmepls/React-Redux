import {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {fetchProductById } from '../features/currentproductSlice';
import { useSelector, useDispatch } from 'react-redux';
// import Product from '../components/Product';

import { Box } from '@mui/system';
import { Skeleton } from '@mui/material';
import DetailOfProduct from '../components/ProductDetail';


export default function ProductDetail(){
    const dispatch= useDispatch()
    let {id} = useParams();
    console.log(id)
    useEffect(()=>{
        dispatch(fetchProductById(id))
    },[])
    
    let product= useSelector((state)=>state.currentproduct)
    console.log(product)

    if(product.loaded!=='fulfilled'){
        return (   
            <div className='Skeleton-loader' marginBottom='50px'>
                <Skeleton animation="wave" variant="rectangular" width="70%" height={50}/>
                <Box id="load1" height="300px" width="50%" >
                <Skeleton animation="wave" variant="rectangular" width="100%" height={160}/>
                <Skeleton animation="wave" variant="rectangular" width="100%" height={70}/>
                <Skeleton animation="wave" variant="rectangular" width="100%" height={70}/>
 
                </Box>      
            </div>
        )
    }
    else{
    return (
        <div className='products'>
         <DetailOfProduct data={product.data}/> 
        </div>
    )
    }
}