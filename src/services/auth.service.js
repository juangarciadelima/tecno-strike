import {apiPublica} from '../api'



export async function login(request){
    const response = await apiPublica.post('/login', request)
    localStorage.setItem('token', response.data.token)
}



export function logout(){
    localStorage.removeItem('token') 
}



//Função de logar e deslogar

//Requisção post que guarda um token usado como autenticador de login
