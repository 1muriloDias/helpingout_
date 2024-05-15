import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Inicio from './components/pages/Inicio';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Eventos from './components/pages/Eventos';
import Convites from './components/pages/Convites';
import Perfil from './components/pages/Perfil';
import SideBar from './components/SideBar';
import Cards from './components/Cards';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <SideBar>
        <Switch>
          <Route path='/' exact component={Inicio} />
          <Route path='/eventos' component={Eventos} />
          <Route path='/convites' component={Convites} />
          <Route path='/perfil' component={Perfil} />
        </Switch>
        </SideBar>
      </Router>
    </>
  );
}

export default App;