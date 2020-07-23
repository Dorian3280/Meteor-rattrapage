import React, { useCallback, useState, useContext } from 'react';
import SessionContext from './SessionContext';
import { Link } from 'react-router-dom';


const Hello = () => {
  const [ formData, setFormData] = useState({ email: '', password: ''});

  const { username, password } = formData;
  
  const { login } = useContext(SessionContext);

  const handleChange = useCallback((e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }, [formData]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    if (username) {
      toast.error('Nom d\'utilisateur vide');
    }
  
    if (password) {
      toast.error('Nom d\'utilisateur vide');
    }

    try {
      login({ username, password });
    } catch (error) {
      toast.error(error.message);
    }
  }, [username, password, login]);

  return (
    <div className="container">
      <h2>Connexion</h2>
      <form className="container" onSubmit={handleSubmit}>
          <input onChange={handleChange} value={formData.email} autoComplete="email" type="email" placeholder="Pseudo"/>
          <input onChange={handleChange} value={formData.password} autoComplete="current-password" type="password"  placeholder="Mot de passe..."/>
          <button className="box button" type="submit">Se connecter</button>
      </form>
      <Link to="/inscription">Je n&apos;ai pas de compte</Link>
    </div>
  );
}

export default Hello;
