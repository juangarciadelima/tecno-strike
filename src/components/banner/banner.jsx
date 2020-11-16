import Foto from '../../logo/banner.jpg'
import './banner.css'
import Circle from '../../logo/circleone.png'
import CircleTwo from '../../logo/circletwo.png'
import CircleThree from '../../logo/circlethree.png'

export function Banner(){
   return <div>
       <div className="legal">
           <img className="banner" src={Foto} alt=""/>
           <div className="texto">
               <h1 className="translacionatu h1">Welcome to The Battlefield, Soldier!</h1>
               <p className="p">With arcane you will be able to <span className="spanzin">Create A Real Gaming Community</span> where users can create teams, fight matches and manage tournaments. What are you waiting for? Start today!</p>
           </div>
       </div>
   </div>
}