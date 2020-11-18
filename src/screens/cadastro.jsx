import './cadastro.css'
import {register} from '../services/user.service'
import React, {useState} from 'react'

export function Cadastro(){

    const [pessoa,setPessoa] = useState({})
   
async function Cadastrado(){
       await register(pessoa)
}


function onChangeSupremo(event){
    const copia = {...pessoa}
    copia[event.target.name] = event.target.value
    setPessoa(copia)
}

    return <form className="box">
        <input type="text" name="name" placeholder="Name"onChange={onChangeSupremo}/>
        <input type="email" name="email"placeholder="Email"onChange={onChangeSupremo}/>
        <input type="password" name="password"placeholder="Senha"onChange={onChangeSupremo}/>
        <input type="text" name="description" placeholder="Bio"onChange={onChangeSupremo}/>
        <input type="text" name="photo" placeholder="Foto"onChange={onChangeSupremo}/>
        <input type="tel" name="phone" placeholder="Telefone" onChange={onChangeSupremo}/>
        <button type="button" onClick={Cadastrado}> Registrar</button>
    </form>
}