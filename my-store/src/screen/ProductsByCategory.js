import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchProductsByCategory} from '../features/productsbycategorySlice'
import { useParams } from "react-router";
import Product from "../components/Product"
import Skeleton from '@mui/material/Skeleton'
import { Box } from '@mui/system'


function ProductsByCategory(){
    const dispatch = useDispatch();

    let {category}= useParams()
    
    useEffect(() => {
        dispatch(fetchProductsByCategory(category))
    },[])

    let products= useSelector((state) => state.productsbycategory)
    // console.log(JSON.stringify(products))
    if(products.loaded!=='fulfilled'){
        return (   
                <div className='Skeleton-loader'>
                <Box id="load1" height="300px" width="24%" >
                <Skeleton animation="wave" variant="rectangular" width="100%" height={160}/>
                <Skeleton animation="wave" variant="rectangular" width={60} height={25}/>
                <Skeleton animation="wave" variant="rectangular" width="100%" height={50}/>
                </Box>
                <Box id="load2" height="300px" width="24%" >
                <Skeleton animation="wave" variant="rectangular" width="100%" height={160}/>
                <Skeleton animation="wave" variant="rectangular" width={60} height={25}/>
                <Skeleton animation="wave" variant="rectangular" width="100%" height={50}/>
                </Box>
                <Box id="load3" height="300px" width="24%" >
                <Skeleton animation="wave" variant="rectangular" width="100%" height={160}/>
                <Skeleton animation="wave" variant="rectangular" width={60} height={25}/>
                <Skeleton animation="wave" variant="rectangular" width="100%" height={50}/>
                </Box>
                <Box id="load4" height="300px" width="24%" >
                <Skeleton animation="wave" variant="rectangular" width="100%" height={160}/>
                <Skeleton animation="wave" variant="rectangular" width={60} height={25}/>
                <Skeleton animation="wave" variant="rectangular" width="100%" height={50}/>
                </Box>
                <Box id="load5" height="300px" width="24%" >
                <Skeleton animation="wave" variant="rectangular" width="100%" height={160}/>
                <Skeleton animation="wave" variant="rectangular" width={60} height={25}/>
                <Skeleton animation="wave" variant="rectangular" width="100%" height={50}/>
                </Box>
                <Box id="load6" height="300px" width="24%" >
                <Skeleton animation="wave" variant="rectangular" width="100%" height={160}/>
                <Skeleton animation="wave" variant="rectangular" width={60} height={25}/>
                <Skeleton animation="wave" variant="rectangular" width="100%" height={50}/>
                </Box>
                <Box id="load7" height="300px" width="24%" >
                <Skeleton animation="wave" variant="rectangular" width="100%" height={160}/>
                <Skeleton animation="wave" variant="rectangular" width={60} height={25}/>
                <Skeleton animation="wave" variant="rectangular" width="100%" height={50}/>
                </Box>
                <Box id="load8" height="300px" width="24%" >
                <Skeleton animation="wave" variant="rectangular" width="100%" height={160}/>
                <Skeleton animation="wave" variant="rectangular" width={60} height={25}/>
                <Skeleton animation="wave" variant="rectangular" width="100%" height={50}/>
                </Box>               
                </div>
        )
    }
    else{
    return (
        <div className='products'>
           {
               products.data.map((product)=>
                <Product key={product.id} data={product}/>
               )
           }
        </div>
    )
    }
}
export default ProductsByCategory