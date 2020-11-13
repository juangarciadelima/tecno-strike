import React from 'react'
import { deletaTime } from '../../services/time'
import {Link} from 'react-router-dom'
import './times.css'



export function Time({time}){
 
 
 
   



return <div>
        <li className="caritem">
 <img className="imagem" src={time.photo} alt="Team Logo"/>
    <h3>{time.name}</h3>
<span>{time.members} membros</span>
</li>
</div>

}




{/* <button type="button" onClick={excluirTime}>Excluir</button>
<Link to = {`/editartime/${time.id}`}>
<button type="button">Editar</button>
</Link> */}