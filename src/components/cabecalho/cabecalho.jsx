
import React, {useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import Logo from '../../logo/logo.png'
import './cabecalho.css'
import { BsPencilSquare } from "react-icons/bs";
import {BsLockFill} from "react-icons/bs"

import {profile} from '../../services/user.service'
import { logout } from '../../services/auth.service';



export function Cabecalho(){
  
  const [foto,setFoto] = useState({})
  const history = useHistory()


  useEffect(async () => {
     setFoto(await profile())
  },[])

  return   <div className="img">
      <img clasname="logo"src={Logo} alt="Header Logo"/>
      { localStorage.getItem('token')
      ? (
         <img className="imagenzinha" src={foto.photo} onClick={logout} alt="User Logo" title="If you click here, you will be logged out"/>
       )  : (<Link to="/cadastro">
           <button className="botaozin" type="button"> <BsPencilSquare /> Register</button>
           <Link to="/login">
               <button className="botaozin" type="button"><BsLockFill /> Sign In</button>
           </Link>
       </Link>)}
    </div>
}