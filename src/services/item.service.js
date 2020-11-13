import {apiPrivada} from '../api/index'


 export async function cadastraItem(request){
     const response =   await apiPrivada.post('/team',request)
     return response.data
 }