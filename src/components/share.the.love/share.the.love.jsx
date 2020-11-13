import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import './share.the.love.css'

export function ShareTheLove(){

  return <div>
      <button><a target = "_blank" rel="noreferrer" className="a"href="https://www.facebook.com/juangarciadelima"> <FaFacebook /></a></button>
      <button><a target="_blank" rel="norreferer" className="a" href="https://www.instagram.com/juangarciadelima/?hl=pt-br"> <FaInstagram /></a></button>
      <button><a target="_blank" rel="norreferer" className="a" href="https://twitter.com/KermitXYC"> <FaTwitter /></a></button>
  </div>

}