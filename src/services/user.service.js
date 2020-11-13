import {apiPublica, apiPrivada} from '../api'


export async function register(request){
    const response = await apiPublica.post('/user',request)
    return response.data
}


export async function profile(){
    const response = await apiPrivada.get('/user/me')
    return response.data
}