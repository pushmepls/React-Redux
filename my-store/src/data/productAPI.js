import axios from 'axios'

function getProductsAPI() {
    return fetch('https://fakestoreapi.com/products')
    .then((data)=>data.json())}

function getProductByIdAPI(Id) {   
    return axios.get(`https://fakestoreapi.com/products/${Id}`)
}
function getProductsByCategoryAPI(Category) {
    return axios.get(`https://fakestoreapi.com/products/category/${Category}`)
}

const productsAPI={
    getProductsAPI,
    getProductByIdAPI,
    getProductsByCategoryAPI};
export default productsAPI;