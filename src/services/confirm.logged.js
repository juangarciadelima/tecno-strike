import { Redirect } from "react-router-dom"
import { isLoggedIn } from "./logged"

export function PublicLayout({tela}){
    const Component = tela

    return <> 
    <p>Estou em páginas públicas</p>
    {isLoggedIn() && <Redirect to="/telainicial"></Redirect>}
    <Component />
    </>
}



export function PrivateLayout({tela}){
    const Component = tela

    return <> 
    <p>Estou em Setor Privado</p>
    {!isLoggedIn() && <Redirect to="/login"></Redirect>}
    <Component />
    </>
}