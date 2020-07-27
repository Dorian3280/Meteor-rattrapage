import { Meteor } from 'meteor/meteor';
import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
        <div className="container">
            <h1>Application Meteor</h1>
            <div className="box jokes">{joke.content}<br></br>{joke.author}</div>
            <div className="box button" onClick={getOneJoke}>Une autre</div>
            <div className="box sign">
                <Link to="/connexion">Connectez-vous !</Link>
            </div>
            <div className="box sign">
                <Link to="/inscription">Inscrivez-vous !</Link>
            </div>
        </div>
    )
}

export default Home;