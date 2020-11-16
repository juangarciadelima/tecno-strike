import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { Title } from '../title/title'
import './share.the.love.css'

export function ShareTheLove() {

  return <div>
    <Title title={"Share The Love"} />
    <ul>
      <li>
        <a className="a" target="_blank" href="https://www.facebook.com/juangarciadelima"><FaFacebook /></a>
      </li>
      <li>
        <a className="a" target="_blank" href="https://www.instagram.com/juangarciadelima/?hl=pt-br"><FaInstagram /></a>
      </li>
      <li>
        <a className="a" target="_blank" href="https://twitter.com/KermitXYC"><FaTwitter /></a>
      </li>
    </ul>
  </div>

}