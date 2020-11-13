import { Banner } from '../components/banner/banner'
import { News } from '../components/news/news'
import { ProximaPartida } from '../components/proxima.partida.jsx/partida.proxima'
import { Partidas } from '../components/proxima.partida/partidas.recentes'
import { ShareTheLove } from '../components/share.the.love/share.the.love'
import {Times} from '../components/times/times'
import {Video} from '../components/video/video'




export function TelaInicial(){
  
    return <div>
        {localStorage.getItem('token') ? (<div> <Banner /> <Video /> <Times /> <Partidas />  <ProximaPartida /> <News /> <ShareTheLove /> </div>) : (<h1>Loga Aí</h1>) }
    </div>

     
}