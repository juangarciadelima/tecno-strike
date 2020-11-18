import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import './rodape.css'
import {FaFacebook} from 'react-icons/fa'

export function Rodape(){
    return <div className="footer">
        <div className="section"> © 2020 Made by Juan Garcia De Lima.</div>
        <div className="section">Thanks For Watching</div>
        <div className="section">
            <section><a className="github" target="_blank" href="https://github.com/juangarciadelima"><AiFillGithub /></a></section>
        </div>
        </div>}