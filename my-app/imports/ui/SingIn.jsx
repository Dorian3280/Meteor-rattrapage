import React, { useCallback, useState, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SessionContext from './SessionContext';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


const Hello = () => {
  const [ formData, setFormData] = useState({ username: '', password: ''});

  const { username, password } = formData;
  
  const { signIn } = useContext(SessionContext);

  const handleChange = useCallback((e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }, [formData]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    if (!username) {
      toast.error('Nom d\'utilisateur vide');
    }
  
    if (!password) {
      toast.error('Mot de passe vide');
    }

    try {
      signIn({ username, password });
      return <Route to="/accueil"></Route>;
    } catch (error) {
      toast.error(error.message);
    }
  }, [username, password, signIn]);

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
