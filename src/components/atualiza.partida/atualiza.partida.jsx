import React, { useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { attMatch } from "../../services/match.service"

export function AtualizaPartida(){
    
    
    const history = useHistory()
    const params = useParams()
  const [partidaSemNada, setPartidaSemNada] = useState({})
  



  function onChangeSupremo(event){
      const copia = {...partidaSemNada}
      copia[event.target.name] = event.target.value
      setPartidaSemNada(copia)
  }
    


async function atualizaPartida(event){
    event.preventDefault()
    await attMatch(partidaSemNada,params.id)
    history.push('/telainicial')
}


    return <div>
        <input type="number" name="scoreTeamA" placeholder="Quanto esse time fez?" onChange={onChangeSupremo}/>
        <input type="number" name="scoreTeamB" placeholder="Quanto esse time fez?"onChange={onChangeSupremo}/>
        <select onChange={onChangeSupremo}>
            <option value="CANCELLED">Cancelada</option>
            <option value="UPCOMING">Está Próxima</option>
            <option value ="PLAYING"> Em Andamento</option>
            <option value="FINISHED">Acabou</option>
        </select>
       <button type="button" onClick={atualizaPartida}>Atualizar</button>
    </div>
}