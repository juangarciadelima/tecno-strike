import { useState, useEffect } from 'react'
import { Time } from './time'
import {time} from '../../services/time'


export function Times(){
    const [times, setTimes] = useState([])

    useEffect(async () => {
        const resposta = await time()
        setTimes(resposta.content)

    }, [])

    return <div>
        {times.map((time) => (
            <Time time={time} />
        ))}

    </div>
}


