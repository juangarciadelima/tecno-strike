import {Link} from 'react-router-dom'
import {deletaTime} from '../../services/time'
import React from 'react'
import './table.css'

export function Tabela({ time }) {

    async function excluirTime(){
        await deletaTime(time.id)
    }
    return <div>

        <table>
            <tr>
                <th>Foto</th>
                <th>Nome</th>
                <th>Membros</th>
                <th>Função</th>
            </tr>
            <tr>
                <td><img src={time.photo} alt="Team Avatar" /></td>
                <td>{time.name}</td>
                <td>{time.members} membro</td>
                <td> <Link to={`/editartime/${time.id}`}>
                    <button className="button" type="button">Editar</button>
                </Link> <button className="button"type="button" onClick={excluirTime}>Excluir</button></td>
            </tr>
        </table>


    </div>
}