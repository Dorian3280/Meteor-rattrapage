import { Meteor } from 'meteor/meteor';
import React, { useState, useCallback, useEffect } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';

const Home = ( {history} ) => {
    let user =  useTracker(() => Meteor.userId(), []);

    if (!user) {
        history.push('/');
    }

    const logout = useCallback(() => {
        Meteor.logout();
        history.push('/');
    }, []);

    const [joke, setJoke] = useState({content: '', author: ''});

    const getOneJoke = useCallback(() => {
        Meteor.call('joke.getOne', (error, result) => {
            if (error) {
                console.log(error.message);
            } else {
                setJoke(result);
            }
        });
    }, []);

    useEffect(() => {
        getOneJoke();
    }, [getOneJoke]);

    return (
        <div className="container">
            <h2>Accueil</h2>
            <div className="box jokes">{joke.content}<br></br>{joke.author}</div>
            <div className="box button" onClick={getOneJoke}>Une autre</div>
            <div className="box sign">
                <Link to="/creez-votre-blague">Créez votre propre blague</Link>
            </div>
            <div className="box sign" onClick={logout}>Deconnexion</div>
        </div>
    )
}

export default Home;