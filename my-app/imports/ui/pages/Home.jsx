import { Meteor } from 'meteor/meteor';
import React, { useState, useCallback, useEffect } from 'react';

import Container from '../components/Container';
import Flex from '../components/Flex';
import Box from '../components/Box';
import Button from '../components/Button';
import Title from '../components/Title';
import Blockquote from '../components/Blockquote';
import Cite from '../components/Cite';
import Paragraphe from '../components/Paragraphe';

const Home = () => {

    // Déclaration du State
    const [joke, setJoke] = useState({content: '', author: ''});

    // Hooks
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

    return (
        <Container>
            <Flex column none center>
                <Title type="1">Application Meteor</Title>
                <Box>
                    <Blockquote>
                        <Paragraphe>{joke.content}</Paragraphe>
                        <Cite>{joke.author}</Cite>
                    </Blockquote>
                </Box>
                <Button onClick={getOneJoke}>Une autre !</Button>
                <Flex row center none>
                    <Button to="/connexion">Connexion</Button>
                    <Button to="/inscription">Inscription</Button>
                </Flex>
            </Flex>
        </Container>
    )
}

export default Home;