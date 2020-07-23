import React, { useCallback, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import SessionContext from './SessionContext';

const Hello = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');

  const { signup } = useContext(SessionContext);


  const handleChange = useCallback((e) => {
    switch (e.target.id) {
      case ('email'):
        setEmail(e.target.value)
        break;
      case('password'):
        setPassword(e.target.value )
        break;
      case('confirmPassword'):
        setConfirmPassword(e.target.value )
        break;
      default:
        break;
    }
  }, []);
  
  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    let fire = true;
    [email, password, confirmPassword].map((e) => {
      if (typeof e === 'string') {
        e.trim();
      }
      if (e === '') fire = false;
    });

    if (!fire && (password !== confirmPassword)) {
      return;
    }
    toast.success('Inscription réussi !');
    signup({
      email,
      password
    })
  }, [email, password, confirmPassword]);

  return (
    <div className="container">
      <h2>Inscription</h2>
      <form className="container" onSubmit={handleSubmit}>
          <div class="pseudo">
              <input onChange={handleChange} value={email} autoComplete="email" type="text" placeholder="Pseudo"/>
          </div>
          <div class="password">
              <input onChange={handleChange} value={password} autoComplete="new-password" type="password"  placeholder="Mot de passe..."/>
          </div>
          <div class="confirmPassword">
              <input onChange={handleChange} value={confirmPassword} autoComplete="new-password" type="password"   placeholder="Vérification"/>
          </div>
          <button className="box button" type="submit">S'inscrire</button>
      </form>
      <Link to="/connexion">J&apos;ai déjà un compte</Link>
    </div>
  );
}

export default Hello;