import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import React, { useCallback, useState } from 'react';

import Container from '../components/Container';
import Flex from '../components/Flex';
import Title from '../components/Title';
import Button from '../components/Button';
import Form from '../components/Form';
import Box from '../components/Box';

const Home = ( {history} ) => {

    // Déclaration du State
    const [jokeContent, setJokeContent] = useState('');

    // Si il n'est pas connecté
    let user =  useTracker(() => Meteor.userId(), []);
    if (!user) {
        history.push('/');
    }

    // Hooks
    const handleChange = useCallback((e) => {
        setJokeContent(e.target.value);
    });

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        
        Meteor.call('joke.create', jokeContent, (error) => {
            if (error) {
                console.log('erreur :' + error.reason);
            } else {
                console.log('réussi');
                setJokeContent('');
            }
        });
    }, [jokeContent]);
    
    // Rendu
    return (
      <Container>
        <Flex column none center>
          <Title type="2">Créez votre propre blague</Title>
          <Form onSubmit={handleSubmit}>
            <Flex column none center>
              <Box text="true" value={jokeContent} onChange={handleChange}></Box>
              <Button type='submit'>Créer la blague</Button>
            </Flex>
          </Form>
          <Button to="/accueil">Retour</Button>
        </Flex>
      </Container>
    )
}

export default Home;