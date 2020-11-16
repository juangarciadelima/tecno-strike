import { Banner } from '../components/banner/banner'
import { News } from '../components/news/news'
import { ProximaPartida } from '../components/proxima.partida.jsx/partida.proxima'
import { Partidas } from '../components/proxima.partida/partidas.recentes'
import { ShareTheLove } from '../components/share.the.love/share.the.love'
import {Times} from '../components/times/times'
import { Title } from '../components/title/title'
import {Video} from '../components/video/video'
import './tela.inicial.css'




export function TelaInicial(){
  
    return <div>
        {localStorage.getItem('token') ? (<div> <Banner /> <News />  <Video />    <div className="divone"><Partidas /></div>   <div className="divtwo"><ShareTheLove />   <Title title="Teams"/> <div className="clear"></div><Times /> </div> </div>  ) : (<h1>Loga Aí</h1>) }
    </div>

     
}