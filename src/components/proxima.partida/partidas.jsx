import moment from 'moment'
import {Link} from 'react-router-dom'

export function ModeloPartidas({partida}){


    const resultado = partida.result
    const status = partida.status ===  "FINISHED"
    
    
    return <div>
        
        <div><h1>Última Partida</h1></div>
        
        <div>
        <img src={partida.teamA.photo} alt="TeamA Photo"/>
        <p>{partida.teamA.name}</p>
        </div>
        <div>
            <img src={partida.teamB.photo} alt="TeamB Logo"/>
<p>{partida.teamB.name}</p>
        </div>
<span> {moment.utc(partida.datetime).format("DD/MM/YY HH:mm")}</span>
<p>{partida.status}</p>
 {console.log(partida)}
<div>{ status ? (<h1>{resultado.scoreTeamA} vs {resultado.scoreTeamB}</h1>) : (<h1>Essa partida ainda não aconteceu ou foi cancelada</h1>)}</div>
<Link to = {`atualizapartida/${partida.id}`}>
    <button type="button">Clique Aqui</button>
</Link>
     </div>

}