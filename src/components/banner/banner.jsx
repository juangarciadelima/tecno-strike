import './banner.css'
import Circle from '../../logo/circleone.png'
import CircleTwo from '../../logo/circletwo.png'
import CircleThree from '../../logo/circlethree.png'

export function Banner(){
   return <div>
       <div className="legal">
       <h1 className="h1">Welcome to The Battlefield, Soldier!</h1>
           <div className="filho">
               <img src={Circle} alt=""/>
               <img src={CircleTwo} alt=""/>
               <img src={CircleThree} alt=""/>
           </div>
           <div className="texto">
               <p className="p">With arcane you will be able to <span className="orangeSpan">Create A Real Gaming Community</span> where users can create teams, <br /> fight matches and manage tournaments. What are you waiting for? Start today!</p>
           </div>
       </div>
   </div>
}