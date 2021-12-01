import axios from "axios";

let headers = new Headers();

  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

  headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
  headers.append('Access-Control-Allow-Credentials', 'true');

  headers.append('GET', 'POST', 'OPTIONS');


function getUserCartAPI(id){
    return axios.get(`https://fakestoreapi.com/carts/user/${id}`,headers)
}

export const updatedCart= (payload) => axios.put(`https://fakestoreapi.com/carts/${payload.cartId}`, payload.data);


export const addNewCart = (payload) => axios.post(`https://fakestoreapi.com/carts`, payload);

export const deleteCart = (payload) => axios.delete(`https://fakestoreapi.com/carts/${payload}`);

const cartAPI={getUserCartAPI }
export default cartAPI