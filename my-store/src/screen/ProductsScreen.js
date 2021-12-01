import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchProducts} from '../features/productSlice'
import Product from '../components/Product'

import Skeleton from '@mui/material/Skeleton'
import { Box } from '@mui/system'

export default function HomeScreen(){
    const dispatch= useDispatch()
   
    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])
    let products = useSelector((state) => state.products)
    //console.log(products)
    if(products.loaded!=='fulfilled'){
        return (   
                <div className='Skeleton-loader'>
                <Box id="load1" height="350px" width="24%" >
                <Skeleton animation="wave" variant="rectangular" width="100%" height={160}/>
                <Skeleton animation="wave" variant="rectangular" width={60} height={25}/>
                <Skeleton animation="wave" variant="rectangular" width="100%" height={50}/>
                </Box>
                <Box id="load2" height="350px" width="24%" >
                <Skeleton animation="wave" variant="rectangular" width="100%" height={160}/>
                <Skeleton animation="wave" variant="rectangular" width={60} height={25}/>
                <Skeleton animation="wave" variant="rectangular" width="100%" height={50}/>
                </Box>
                <Box id="load3" height="350px" width="24%" >
                <Skeleton animation="wave" variant="rectangular" width="100%" height={160}/>
                <Skeleton animation="wave" variant="rectangular" width={60} height={25}/>
                <Skeleton animation="wave" variant="rectangular" width="100%" height={50}/>
                </Box>
                <Box id="load4" height="350px" width="24%" >
                <Skeleton animation="wave" variant="rectangular" width="100%" height={160}/>
                <Skeleton animation="wave" variant="rectangular" width={60} height={25}/>
                <Skeleton animation="wave" variant="rectangular" width="100%" height={50}/>
                </Box>
                <Box id="load5" height="350px" width="24%" >
                <Skeleton animation="wave" variant="rectangular" width="100%" height={160}/>
                <Skeleton animation="wave" variant="rectangular" width={60} height={25}/>
                <Skeleton animation="wave" variant="rectangular" width="100%" height={50}/>
                </Box>
                <Box id="load6" height="350px" width="24%" >
                <Skeleton animation="wave" variant="rectangular" width="100%" height={160}/>
                <Skeleton animation="wave" variant="rectangular" width={60} height={25}/>
                <Skeleton animation="wave" variant="rectangular" width="100%" height={50}/>
                </Box>
                <Box id="load7" height="350px" width="24%" >
                <Skeleton animation="wave" variant="rectangular" width="100%" height={160}/>
                <Skeleton animation="wave" variant="rectangular" width={60} height={25}/>
                <Skeleton animation="wave" variant="rectangular" width="100%" height={50}/>
                </Box>
                <Box id="load8" height="350px" width="24%" >
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