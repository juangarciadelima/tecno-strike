import moment from 'moment'
import { Link } from 'react-router-dom'
import { Title } from '../title/title'
import './partida.css'

export function ModeloPartidas({partida}) {
    return <div className="divisao">
    <div className="teams">
    <img className="imgA" src ={partida.teamA.photo} alt=""/>
    <span className="versusTwo">vs</span>
    <img className="imgB" src={partida.teamB.photo} alt=""/>
    </div>
    <div className="hourTwo">
        {moment.utc(partida.datetime).format("MMMM do YYYY ")}<span className="orange">{moment.utc(partida.datetime).format("HH:mm a")}</span>
    </div>
    </div>

}