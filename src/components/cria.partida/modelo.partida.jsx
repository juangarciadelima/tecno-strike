import React from 'react'
import './cria.partida.css'


export function Modelo({ time }) {
    return <div>
        <ul className="abc">
            <li>
                <img className="ffimg" src={time.photo} alt="Team Logo" />
                <p className="ak">{time.name}</p>
                <span className="smg">{time.id}</span>
            </li>
        </ul>
    </div>

}