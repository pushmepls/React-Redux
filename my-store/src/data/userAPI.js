import axios from "axios";


function getUserById(id){
    return axios.get(`https://fakestoreapi.com/users/${id}`)
    // .then(data => console.log(data))
}

function getUsertoken(username,password) {
    const users=[]
    console.log(username+'/'+password)
    return fetch('https://fakestoreapi.com/users')
            .then(response => response.json())
            .then(data => {
            data.map(user => users.push(user))
            console.log(users)
            for (let i =0; i < users.length; i++){
                if(users[i].username===username&&users[i].password===password){
                return (axios.get(`https://fakestoreapi.com/users/${users[i].id}`))
                }           
            }
})}

const userAPI={   
    getUsertoken,
    getUserById    
}     
export default userAPI;