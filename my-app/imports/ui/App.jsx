import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { SessionProvider } from './SessionContext';
import Home from './Home';
import SingUp from './SingUp';
import SingIn from './SingIn';
import UserHome from './UserHome';
import CreateJoke from './CreateJoke';
import ErrorPage from './ErrorPage';

const App = () => (
  <Router>
    <SessionProvider>
      <Switch>
        <Route path="/connexion"          component={SingIn}/>
        <Route path="/inscription"        component={SingUp}/>
        <Route path="/accueil"            component={UserHome}/>
        <Route path="/creez-votre-blague" component={CreateJoke}/>
        <Route exact path="/"             component={Home} />
        <Route path="*"                   component={ErrorPage}/>
      </Switch>
    </SessionProvider>
  </Router>
);

export default App;