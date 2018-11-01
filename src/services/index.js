import axios from 'axios';
//se manda llamar a todos los servicios desde aqui
const API_URL = "https://backend-air-bnb.herokuapp.com/api/v1"
//https://b-b24-airbnb1.herokuapp.com/api/v1
const createUser = (data) => axios.post(`${API_URL}/users/signup`,data)

const loginUser = (data) => axios.post(`${API_URL}/users/login`,data)


export {
    createUser,
    loginUser
}