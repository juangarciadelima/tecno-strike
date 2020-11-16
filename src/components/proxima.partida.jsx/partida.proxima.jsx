import React, {useState, useEffect} from 'react'
import {ModeloProximaPartida} from './modelo.partida.proxima'
import {nextMatch} from '../../services/match.service'
import './proxima.partida.css'

export function ProximaPartida(){
  
    const [proximapartida,setProximaPartida] = useState()


    useEffect(async() => {
        const response = await nextMatch()
        setProximaPartida(response)
        if(response.status === 404){
            return <h1>Todas as partidas de hoje acabaram, obrigado</h1>
        }
    },[])





    return <div>
        {proximapartida && <ModeloProximaPartida partida={proximapartida}/> }
    </div>

}
