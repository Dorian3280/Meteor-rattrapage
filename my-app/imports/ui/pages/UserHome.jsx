import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import React, { useState, useCallback, useEffect } from 'react';

import Container from '../components/Container';
import Flex from '../components/Flex';
import Box from '../components/Box';
import Title from '../components/Title';
import Button from '../components/Button';
import Blockquote from '../components/Blockquote';
import Cite from '../components/Cite';
import Paragraphe from '../components/Paragraphe';


const Home = ( {history} ) => {

    // Déclaration du State
    const [joke, setJoke] = useState({content: '', author: ''});

    // Si il n'est pas connecté
    let user =  useTracker(() => Meteor.userId(), []);
    if (!user) {
        history.push('/');
    }

    // Hooks
    const logout = useCallback(() => {
        Meteor.logout();
        history.push('/');
    }, []);

    const getOneJoke = useCallback(() => {
        Meteor.call('joke.getOne', (error, result) => {
            if (error) {
                console.log(error.message);
            } else {
                setJoke(result);
            }
        });
    }, []);

    // A l'initialisation du component
    useEffect(() => {
        getOneJoke();
    }, [getOneJoke]);


    // Rendu
    return (
        <Container>
            <Flex column none center>
                <Title type="2">Accueil</Title>
                <Box>
                    <Flex column center center>
                        <Blockquote>
                        <Paragraphe>{joke.content}</Paragraphe>
                        <Cite>{joke.author}</Cite>
                        </Blockquote>
                    </Flex>
                </Box>
                <Flex row center none>
                    <Button onClick={getOneJoke}>Une autre</Button>
                    <Button to="/creez-votre-blague">Créez en une</Button>
                </Flex>
                <Button onClick={logout}>Déconnexion</Button>
            </Flex>
        </Container>
    )
}

export default Home;