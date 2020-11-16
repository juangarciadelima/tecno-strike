import moment from 'moment'
import { Link } from 'react-router-dom'
import { Title } from '../title/title'
import './partida.css'

export function ModeloPartidas({ partida }) {


    const resultado = partida.result
    const status = partida.status
    return <div>
        <Title title={"Recent Matches"}/>
    </div>

}