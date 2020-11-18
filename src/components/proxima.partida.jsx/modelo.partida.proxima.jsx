import moment from 'moment'
import { Title } from '../title/title'
import './proxima.partida.css'

export function ModeloProximaPartida({ partida }) {
    return <div>
        <Title title="Next Matches" />
        <div className="clear"></div>
        <div className="fotos">
        <div>
            <div className="teamA">
                <img className="teamAtime" src={partida.teamA.photo} alt="TeamA Logo" />
            </div>
            <div className="teamB">
                <img className="teamBtime" src={partida.teamB.photo} alt="TeamB Logo" />
            </div>
        </div>
        
           <div className="clear"></div>
            <div className="TeamsName">
                <div className><span className= "teamHomeName">{partida.teamA.name}</span></div>
                <div className="versus"><span>Vs</span></div>
                <div className="oppositeTeam"><span >{partida.teamB.name}</span></div>
            <div className="clear"></div>
            <div className="clear"></div>
        </div>
        <div className="hour"><span className="hourText"> {moment.utc(partida.datetime).format("MMMM do YYYY")}</span> <span className="laranja">{moment.utc(partida.datetime).format("HH mm a")}</span></div>
    
        </div>
        </div>
}