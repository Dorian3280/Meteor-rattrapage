import { Meteor } from 'meteor/meteor';
import React, { useCallback, useState, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from 'react-router-dom';


const Hello = ( {history} ) => {
  const [ formData, setFormData] = useState({ username: '', password: ''});

  const { username, password } = formData;

  const handleChange = useCallback((e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }, [formData]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    if (!username || username === '') {
      console.log('Nom d\'utilisateur vide');
    }
  
    if (!password || password === '') {
      console.log('Mot de passe vide');
    }

    try {
      Meteor.loginWithPassword(username, password, (error) => {
        if (error) {
          console.log(error.reason);
        } else {
          history.push('/accueil');
        }
      })
    } catch (error) {
      console.log(error.message);
    }
  }, [username, password]);

  return (
    <div className="container">
      <h2>Connexion</h2>
      <form className="container" onSubmit={handleSubmit}>
          <input onChange={handleChange} value={formData.email} type="text" id="username" placeholder="Username"/>
          <input onChange={handleChange} value={formData.password} autoComplete="current-password" id="password" type="password" placeholder="Mot de passe..."/>
          <button className="box button" type="submit">Se connecter</button>
      </form>
      <Link to="/inscription">Je n&apos;ai pas de compte</Link>
    </div>
  );
}

export default Hello;
