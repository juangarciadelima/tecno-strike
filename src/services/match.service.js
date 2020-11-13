import {apiPrivada} from '../api'


export async function match(){
    const response = await apiPrivada.get('/match/latest')
    return response.data
}



export async function registerMatch(request){
    const response = await apiPrivada.post('/match', request)
    return response.data
}



export async function nextMatch(){
    const response = await apiPrivada.get('/match/next')
    return response.data
}


export async function attMatch(request, id){
    const response = await apiPrivada.patch(`match/${id}`, request)
    return response.data.content
}