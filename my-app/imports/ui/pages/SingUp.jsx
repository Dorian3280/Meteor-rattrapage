import { Accounts } from 'meteor/accounts-base';
import React, { useCallback, useState } from 'react';

import Container from '../components/Container';
import Flex from '../components/Flex';
import Title from '../components/Title';
import Button from '../components/Button';
import Form from '../components/Form';
import Input from '../components/Input';


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
    <Container>
      <Flex column none center>
        <Title type="2">Inscription</Title>
        <Form onSubmit={handleSubmit}>
          <Flex column none center>
            <Input onChange={handleChange} value={username} id="username" type="text" placeholder="Username"/>
            <Input onChange={handleChange} value={password} id="password" autoComplete="new-password" type="password" placeholder="Mot de passe..."/>
            <Input onChange={handleChange} value={verification} id="verification" autoComplete="new-password" type="password" placeholder="Vérification"/>
            <Button type="submit">S&apos;inscrire</Button>
          </Flex>
        </Form>
        <Button to="/connexion">J'ai déjà un compte</Button>
      </Flex>
    </Container>
  );
}

export default Hello;