import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
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


function App() {
     return <Router>
          <Cabecalho />
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
          </Switch>
          <Rodape />
     </Router>
}


export default App

