import React, {useState, useEffect} from 'react'
import {ModeloPartidas} from './partidas'
import {matchLast} from '../../services/match.service'

export function Partidas(){
      const [partida,setPartida] = useState([])


      useEffect(async () => {
          const response = await matchLast()
          setPartida(response.content)
      },[])




    return <div>
        {partida.map((partida) => (
            <ModeloPartidas partida={partida} />
        ))}
    </div>
    
}