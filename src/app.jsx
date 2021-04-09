import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import React from 'react'
import { Cabecalho } from './components/cabecalho/cabecalho'
import { Cadastro } from './screens/cadastro'
import { TelaInicial } from './screens/tela.inicial'
import { AtualizaPartida } from './components/atualiza.partida/atualiza.partida'
import { Login } from './screens/login'
import { Formulario } from './screens/formulario'
import { Rodape } from './components/rodape/rodape'
import { Video } from './components/video/video'
import { AtualizaInteiro } from './components/atualiza.inteiro/atualiza.time.inteiro'
import { Title } from './components/title/title'
import { CriaPartida } from './components/cria.partida/cria.partida'
import './video/app.css'


function App() {
     return <Router>

          <Cabecalho />
          <div className="dropdown">
               <button className="dropdownBtn" >Nav Bar</button>
               <div className="dropdownContent">
               <Link to="/telainicial">
                         <button className="btnLink" type="button">Início</button>
                    </Link>
                    <Link to="/formulario">
                         <button className="btnLink" type="button">Formulários</button>
                    </Link>
                    <Link to="/criapartida">
                         <button className="btnLink" type="button">Cr. Partidas</button>
                    </Link>
                    <Link to="/atualizapartida">
                         <button className="btnLink" type="button">Att Partidas</button>
                    </Link>
               </div>
          </div>
          <Switch>
               <Route path="/telainicial">
                    <TelaInicial />
               </Route>
               <Route path="/cadastro">
                    <Cadastro />
               </Route>
               <Route path="/login">
                    <Login />
               </Route>
               <Route path="/formulario">
                    <Formulario />
               </Route>
               <Route path="/editartime/:id">
                    <AtualizaInteiro />
               </Route>
               <Route path="/atualizapartida">
                    <AtualizaPartida />
               </Route>
               <Route path="/criapartida">
                    <CriaPartida />
               </Route>
          </Switch>
          <Rodape />
     </Router>
}


export default App


//Definição das Rotas e renderização dos componentes

