

import {  useEffect, useState } from "react";
import { fetchUser } from "../features/userSlice"; 
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";






export default function LoginScreen() {
const [username, setUserName] = useState('');
const [password, setPassWord] = useState('');

  // const [exist,setExist] = useState();
const dispatch = useDispatch()
const Navigate= useNavigate()

const user = useSelector((state)=>state.user)

  const handleSubmit= async e => {
    e.preventDefault();
    const token = fetchUser({
      username,
      password
    });
    //setToken(token);
    dispatch(token)
    
    console.log(token);
    return token
}

// useEffect(()=>{
//   if(user.loaded==='fulfilled'){
//     console.log('da fetch cart ')
//     dispatch(fetchCart(user.id))
//   }
// },[])

const onChangeUsername = (e) => {
  const username = e.target.value;
  setUserName(username);
};

const onChangePassword = (e) => {
  const password = e.target.value;
  setPassWord(password);
};



// console.log('log in screen user ',user) 

//  console.log()

  return user.loaded !== 'fulfilled'
  ?(
    <div id='login-form' >
      <div>
          <p>Login</p>
          {/* <p className="regis-page">
            <a href="../nordic-coder/register.html"
              >Create account
              <button>
                {'>'}
              </button>
            </a>
          </p> */}
        </div>
        
          <input id="login" 
          type="text" 
          placeholder="username*" 
          value={username}
          onChange={onChangeUsername}/><br />

          <input id="password" 
          type="password" 
          placeholder="Password*" 
          value={password}
          onChange={onChangePassword}/><br />

          <button type='submit' className="login-btn" onClick={handleSubmit}>Login</button>
          
          {user.loaded==='rejected'?
            <p>username or password incorect</p> 
            :<div></div> 
          }
          
        {/* <div className="selection">
          <div>
            <input type="checkbox" id="remember" />
            <label>Remember me</label>
          </div>
          <div><a href="/">lost password</a><br /></div>
      </div>
        <button type='submit' className="login-btn">Login</button>
       */}
       
    </div>
    )
    :(<>
    {Navigate('/products')}
    </>)
}