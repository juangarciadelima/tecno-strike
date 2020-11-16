import React from 'react'
import { deletaTime } from '../../services/time'
import {Link} from 'react-router-dom'
import './times.css'
import { Title } from '../title/title'



export function Time({time}){
 
 
 
   



return <div>
    <ul className="lista">
        <li>
            <div className="timeParaListar">
                <div className="timeFoto"> 
                 <img className="fimg" src={time.photo} alt=""/>
                </div>
                <div className="timeNome">
<span className="bc">{time.name}</span>
                </div>
                <div className="timeMembros">
                    <span>{time.members} membros</span>
                </div>
            </div>
        </li>
    </ul>
</div>

}




{/* <button type="button" onClick={excluirTime}>Excluir</button>
<Link to = {`/editartime/${time.id}`}>
<button type="button">Editar</button>
</Link> */}