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
            <Flex>
                <Title type="1">Application Meteor</Title>
                <Box>
                    <Blockquote>
                    <Paragraphe>{joke.content}</Paragraphe>
                    <Cite>{joke.author}</Cite>
                    </Blockquote>
                </Box>
                <Button primacy="true" onClick={getOneJoke}>Une autre !</Button>
                <Button to="/connexion">Connexion</Button>
                <Button to="/inscription">Inscription</Button>
            </Flex>
        </Container>
    )
}

export default Home;