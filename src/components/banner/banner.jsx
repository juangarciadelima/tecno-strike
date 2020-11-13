import Foto from '../../logo/banner.jpg'
import './banner.css'
import Circle from '../../logo/circleone.png'
import CircleTwo from '../../logo/circletwo.png'
import CircleThree from '../../logo/circlethree.png'

export function Banner(){
   return <div>
        <div>
       <img  className="CircleOne"src={Circle} alt="Circle One"/>
       <h1>Oi</h1>
       <img className="CircleTwo" src={CircleTwo} alt="Circle Two"/>
           <h1>Oi</h1>
           <img className="CircleThree" src={CircleThree} alt="Circle Three"/>
           <h1>Oi</h1>
       </div>
       <div>
       <img className="banner"src={Foto} alt="Website Banner"/>
       </div>
   </div>
}