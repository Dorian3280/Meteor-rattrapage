import { Meteor } from 'meteor/meteor';
import React, { useCallback, useState } from 'react';

import Container from '../components/Container';
import Flex from '../components/Flex';
import Title from '../components/Title';
import Button from '../components/Button';
import Form from '../components/Form';
import Input from '../components/Input';

const Hello = ( {history} ) => {

  // Déclaration du State et des variables
  const [ formData, setFormData] = useState({ username: '', password: ''});
  const { username, password } = formData;

  // Hooks
  const handleChange = useCallback((e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }, [formData]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

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

  // Rendu
  return (
    <Container>
        <Flex>
          <Title type="2">Connexion</Title>
          <Form onSubmit={handleSubmit}>
            <Flex>
              <Input onChange={handleChange} value={formData.email} type="text" id="username" placeholder="Username"/>
              <Input onChange={handleChange} value={formData.password} autoComplete="current-password" id="password" type="password" placeholder="Mot de passe..."/>
              <Button type="submit">Se connecter</Button>
              </Flex>
            </Form>
          <Button to="/inscription">Je n'ai pas de compte</Button>
      </Flex>
    </Container>
  );
}

export default Hello;
