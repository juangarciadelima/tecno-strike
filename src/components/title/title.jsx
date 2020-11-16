import React from 'react'
import {FaGamepad} from 'react-icons/fa'

import './title.css'



export function Title({title}){

    return <div className="background "> 
   
        <h3 className="stripes">{title}
        <i> <FaGamepad  className="symbol"/></i></h3>
        </div>
}