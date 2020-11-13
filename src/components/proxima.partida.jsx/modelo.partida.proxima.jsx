import moment from 'moment'

export function ModeloProximaPartida({partida}){
    return <div>
        <h1>próxima partida</h1>
        <div>
       <img src={partida.teamA.photo} alt="TeamA Logo"/> 
<p>{partida.teamA.name}</p>
       </div>
       <h3>Vs</h3>
       <div>
           <img src={partida.teamB.photo} alt="TeamB Logo"/>
     <p>{partida.teamB.name}</p>
       </div>
<span> {moment.utc(partida.datetime).format("DD/MM/YY HH:mm")}</span>
<p>{partida.status}</p>
    </div>
}