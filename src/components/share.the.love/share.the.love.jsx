import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { Title } from '../title/title'
import {FaTwitch} from 'react-icons/fa'
import {FaDiscord} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import './share.the.love.css'

export function ShareTheLove() {

  return <div>
    <Title title={"Share The Love"} />
    <ul>
      <li className="itemlist">
        <a className="a aFacebook" target="_blank" href="https://www.facebook.com/CSGLOB/"><FaFacebook /></a>
      </li>
      <li className="itemlist">
        <a className="a aInstagram" target="_blank" href="https://www.instagram.com/csgo_dev/?hl=pt"><FaInstagram /></a>
      </li>
      <li className="itemlist">
        <a className="a aTwitter" target="_blank" href="https://twitter.com/csgo"><FaTwitter /></a>
      </li >
      <li className="itemlist">
        <a target="_blank" className="a aTwitch " href="https://www.twitch.tv/directory/game/Counter-Strike%3A%20Global%20Offensive"><FaTwitch /></a>
      </li>
      <li className="itemlist">
        <a target="_blank"  className="a aDiscord" href="https://discord.com/invite/eslcsgo"><FaDiscord /></a>
      </li>
      <li className="itemlist">
        <a target="_blank"  className="a aYoutube" href="https://www.youtube.com/channel/UCPq2ETz4aAGo2Z-8JisDPIA"><FaYoutube /></a>
      </li>
    </ul>
  </div>

}