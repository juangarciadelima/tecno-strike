import { apiPrivada } from "../api";

export async function time(){
    const response = await apiPrivada.get('/team')
    return response.data
}


export async function atualizaTimeInteiro(request, id){
    const response = await apiPrivada.put(`/team/${id}`,request)
    return response.data
}


export  function deletaTime(id) {
     apiPrivada.delete(`/team/${id}`)
 }