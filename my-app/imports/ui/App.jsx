import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './pages/Home';
import SingUp from './pages/SingUp';
import SingIn from './pages/SingIn';
import UserHome from './pages/UserHome';
import CreateJoke from './pages/CreateJoke';
import ErrorPage from './pages/ErrorPage';

const App = () => (
  <Router>
    <Switch>
      <Route path="/connexion"          component={SingIn}/>
      <Route path="/inscription"        component={SingUp}/>
      <Route path="/accueil"            component={UserHome}/>
      <Route path="/creez-votre-blague" component={CreateJoke}/>
      <Route exact path="/"             component={Home} />
      <Route path="*"                   component={ErrorPage}/>
    </Switch>
  </Router>
);

export default App;
