import axios from "axios";

function getCategoryAPI(){
    return axios.get('https://fakestoreapi.com/products/categories')
}
const categoriesAPI={getCategoryAPI}
export default categoriesAPI