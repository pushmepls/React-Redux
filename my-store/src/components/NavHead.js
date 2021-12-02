import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import React, {useEffect, useState} from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../features/userSlice'
import '../style/NavHead.css'
import { fetchCart, logOutCart, logoutCart } from '../features/cartSlice'
//import {fetchLocal} from '../features/userSlice'
import { Box } from '@mui/system'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { fetchCategories } from '../features/categorySlice'
// import {logoutCart} from '../features/cartSlice'


export default function NavHead(){

  

  const dispatch=useDispatch()

  const categories=useSelector((state) => state.categories)

  const user = useSelector((state) => state.user)

  const cart = useSelector((state) => state.usercart)

  useEffect(()=>{
    console.log('user loaded: ',user.load)
    if(user.loaded==='fulfilled'){
      console.log('tại đây đã chạy')
      dispatch(fetchCart(user.data.id)) 
    }
  },[user, dispatch])

  // useEffect(() => {
  //   if(user.loaded === 'fulfulled') {
  //       const userinfo = user.data
  //       dispatch(fetchCart(userinfo.id));
      
  //   }
  // },[user, dispatch])

//  async function items(){
//       console.log('cart data.length ', cartdata)
//       return (<p className="amount">
//       {
//         items
//       }
//     </p>)
//   }
  
  useEffect(()=>{
    dispatch(fetchCategories())
    console.log('dispatched categories')
  },[])

  // useEffect(()=>{
  //   if(user.loaded==='fulfilled'){
  //   }
  // })
  
  const handleLogout=(e)=>{
      e.preventDefault()
      dispatch(logout())
      dispatch(logOutCart())
      
      // setItems(0)
      console.log('user loggin button ', user)
    }
    
  return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <NavLink className='nav-link' to ='/products'>Products</NavLink>
      <NavLink className='nav-link' to='/'>Home</NavLink>
      <NavDropdown title="Category" id="collasible-nav-dropdown">
        {
          categories.data.map((category)=>
          <NavDropdown.Item className='nav-dropdown' key={category}>
            <NavLink className='categories-link' to={`/${category}`}>{category}</NavLink>
          </NavDropdown.Item>
          )       
        }
      </NavDropdown>
    </Nav>
    <Nav>
      {
        
    user.loaded==='fulfilled'
    ?(<button  onClick={handleLogout} >log out</button> )
    :(<NavLink className='nav-link' to='/login'>Login</NavLink>)
      }
      
    </Nav>
    
       (<Box className="cart-box">
         
          <p className="amount">
            {
              cart.data[0]?.products?.length || 0
            }
          </p>
          <NavLink to="/cart">
            <ShoppingCartOutlined className="cart-icon"></ShoppingCartOutlined>
          </NavLink>
        </Box>)
    
    
  </Navbar.Collapse>
  </Container>
</Navbar>)
}