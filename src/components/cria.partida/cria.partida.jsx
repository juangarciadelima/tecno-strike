import React from 'react'
import { useState, useEffect } from 'react'
import {time} from '../../services/time'
import { Modelo } from './modelo.partida'
import {registerMatch} from '../../services/match.service'
import './cria.partida.css'



export function CriaPartida(){


    

    const [times,setTimes] = useState([])
    const [partida,setPartida] = useState({})

    useEffect(async () => {
        const resposta = await time()
        setTimes(resposta.content)
        if(resposta.status === "400"){
           alert('Verifique seus times')
        }

    }, [])


    async function Register(){
        await registerMatch(partida) 
    }



    function onChangeSupremo(event){
        const copia = {...partida}
        copia[event.target.name] = event.target.value
        setPartida(copia)
    }

   


    return <div >
        <form className="caixa">
        <input type="number" name="idTeamA" placeholder="Time Da Casa" onChange={onChangeSupremo}/>
        <input type="number" name="idTeamB" placeholder="Time Fora" onChange={onChangeSupremo}/>
        <input className="data" type="datetime-local" name="datetime" placeholder="Horário" onChange={onChangeSupremo}/>
        <button type="button" onClick={Register}>Cadastre Aqui</button>
        </form>


        
        <div>
        {times.map((time) => (
            <Modelo time={time}/>
        ))}
        </div>
    </div>
}