import React, {useState} from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { atualizaTimeInteiro } from '../../services/time'






export function AtualizaInteiro(){


    const history = useHistory()
    const params = useParams()
      console.log(params)
const [timeAtualiza, setTimeAtualiza] = useState({})





async function atualizaTime(event){
    event.preventDefault()
    await atualizaTimeInteiro(timeAtualiza, params.id)
    history.push('/telainicial')
}


function onChangeSupremo(event){
   const copia = {...timeAtualiza}
   copia[event.target.name] = event.target.value
   setTimeAtualiza(copia)
}

  


    return <form>
        <h1>Atualize seu time Favorito</h1>
          <input type="text" name="name" onChange={onChangeSupremo} />
          <input type="text" name="description" onChange={onChangeSupremo}/>
          <input type="text" name="photo" onChange={onChangeSupremo}/>
          <input type="number" name="members" onChange={onChangeSupremo}/>
          <button type="button" onClick={atualizaTime}>Atualiza Aí</button>
     </form>


}