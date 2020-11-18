import React from 'react'
import { useState } from 'react'
import {login} from '../services/auth.service'
import {useHistory} from 'react-router-dom'
import './login.css'


export function Login() {
    const history = useHistory()
    const [pessoaLogada, setPessoaLogada] = useState()


    async function Logado(event) {
        event.preventDefault()
        await login(pessoaLogada)
        history.push('/telainicial')
    }

   function onChangeSupremo(event){
       const copia = {...pessoaLogada}
       copia[event.target.name] = event.target.value
       setPessoaLogada(copia)
   }



    return <form className="box">
        <input type="email" name="username" placeholder="Email"onChange={onChangeSupremo}></input>
        <input type="password" name="password"  placeholder="Senha"onChange={onChangeSupremo}></input>
        <button type="button" onClick={Logado}> Logar</button>

    </form>




}