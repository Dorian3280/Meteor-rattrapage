import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
        <div className="container">
            <h2>Accueil</h2>
            <div className="box jokes">{joke.content}<br></br>{joke.author}</div>
            <div className="box button" onClick={getOneJoke}>Une autre</div>
            <div className="box sign">
                <Link to="/creez-votre-blague">Créez votre propre blague</Link>
            </div>
            <div className="box sign" onClick={logout}>Déconnexion</div>
        </div>
    )
}

export default Home;