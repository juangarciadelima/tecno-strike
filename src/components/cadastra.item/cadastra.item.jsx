import React, { useState } from 'react'
import { cadastraItem } from '../../services/item.service'
import { Link } from 'react-router-dom'
import { time } from '../../services/time'
import { useEffect } from 'react'
import { Tabela } from './tabela.times'



export function CadastraItens() {

    const [item, setItem] = useState({})
    const [times, setTimes] = useState([])


    async function itemCadastrado() {
        await cadastraItem(item)
    }

    useEffect(async () => {
        const response = await time()
        setTimes(response.content)
    }, [])




    function onChangeSupremo(event) {
        const copia = { ...item }
        copia[event.target.name] = event.target.value
        setItem(copia)
    }





    return <div>

        <form>
            <input type="text" name="description" placeholder="Descrição Do Time" onChange={onChangeSupremo} />
            <input name="name" type="text" placeholder="Qual o nome do time" onChange={onChangeSupremo} />
            <input name="members" type="number" placeholder="Quantos Membros" onChange={onChangeSupremo} />
            <input name="photo" type="text" placeholder="Foto do Time" onChange={onChangeSupremo} />
            <button type="button" onClick={itemCadastrado}>Cadastre Seu Time</button>
        </form>

        {times.map((time) => (
            <Tabela time={time} />
        ))}
    </div>
}