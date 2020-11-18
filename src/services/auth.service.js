import {apiPublica} from '../api'



export async function login(request){
    const response = await apiPublica.post('/login', request)
    localStorage.setItem('token', response.data.token)
}



export function logout(){
    localStorage.removeItem('token') 
}