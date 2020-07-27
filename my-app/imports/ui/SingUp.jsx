import { Accounts } from 'meteor/accounts-base';
import React, { useCallback, useState, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';

const Hello = ( {history} ) => {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ verification, setVerification ] = useState('');

  const handleChange = useCallback((e) => {
    switch (e.target.id) {
      case ('username'):
        setUsername(e.target.value)
        break;
      case('password'):
        setPassword(e.target.value )
        break;
      case('verification'):
        setVerification(e.target.value )
        break;
      default:
        break;
    }
  }, []);
  
  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    let fire = true;
    [username, password, verification].map((e) => {
      e.trim();
      if (e === '') fire = false;
    });

    if (!fire || (password !== verification)) {
      console.log('error');
      return;
    } else {
      Accounts.createUser({username, password}, (error) => {
        if (error) {
          console.log('erreur :' + error.reason);
        } else {
          console.log('réussi');
          history.push('/accueil');
        }
      });
    }
  }, [username, password, verification]);

  return (
    <div className="container">
      <h2>Inscription</h2>
      <form className="container" onSubmit={handleSubmit}>
          <div className="pseudo">
              <input onChange={handleChange} value={username} id="username" type="text" placeholder="Pseudo"/>
          </div>
          <div className="password">
              <input onChange={handleChange} value={password} id="password" autoComplete="new-password" type="password" placeholder="Mot de passe..."/>
          </div>
          <div className="confirmPassword">
              <input onChange={handleChange} value={verification} id="verification" autoComplete="new-password" type="password" placeholder="Vérification"/>
          </div>
          <button className="box button" type="submit">S'inscrire</button>
      </form>
      <Link to="/connexion">J&apos;ai déjà un compte</Link>
    </div>
  );
}

export default Hello;