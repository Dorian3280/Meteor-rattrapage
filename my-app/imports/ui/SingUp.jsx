import React, { useCallback, useState, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';
import SessionContext from './SessionContext';
import { toast } from 'react-toastify';

const Hello = () => {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ verification, setVerification ] = useState('');

  const { signUp } = useContext(SessionContext);


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
      if (typeof e === 'string') {
        e.trim();
      }
      if (e === '') fire = false;
    });

    if (!fire || (password !== verification)) {
      console.log('error');
      toast.error('Erreur');
      return;
    } else {
      toast.success('Inscription réussi !');
      console.log('réussi');
      signUp({
        username,
        password
      });
      return (
        <Redirect to="/" />
      );
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