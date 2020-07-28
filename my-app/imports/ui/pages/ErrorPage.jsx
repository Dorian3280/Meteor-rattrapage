import React from 'react';

import Container from '../components/Container';
import Flex from '../components/Flex';
import Title from '../components/Title';
import Button from '../components/Button';

const ErrorPage = () => {
    return (
        <Container>
            <Flex>
                <Title type="2">ERROR 404 - PAGE INTROUVABLE</Title>
                <Button to="/">Retour à la page d'accueil</Button>
            </Flex>
        </Container>
    )
}

export default ErrorPage;