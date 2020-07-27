import { Accounts } from 'meteor/accounts-base';
import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

const Hello = ( {history} ) => {

  // Déclaration du State
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ verification, setVerification ] = useState('');

  // Hooks
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

  // Rendu
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
          <button className="box button" type="submit">S&apos;inscrire</button>
      </form>
      <Link to="/connexion">J&apos;ai déjà un compte</Link>
    </div>
  );
}

export default Hello;