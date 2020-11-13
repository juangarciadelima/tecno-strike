
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../logo/logo.png'
import './cabecalho.css'
import { BsPencilSquare } from "react-icons/bs";
import {BsLockFill} from "react-icons/bs"

import {profile} from '../../services/user.service'



export function Cabecalho(){
  
  const [foto,setFoto] = useState({})


  useEffect(async () => {
     setFoto(await profile())
  },[])

  return <>
    <div className="img">
      <img src={Logo} alt="Header Logo"/>
      { localStorage.getItem('token')
      ? (<div>
          <img src={foto.photo} alt="User Logo"/>
       </div>)  : (<Link to="/cadastro">
        <div>
           <button type="button"> <BsPencilSquare /> Register</button>
           </div>
           <Link to="/login">
             <div>
               <button type="button"><BsLockFill /> Sign In</button>
               </div>
           </Link>
       </Link>)}
    </div>
  </>
}