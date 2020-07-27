import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = ( {history} ) => {

    // Déclaration du State
    const [jokeContent, setJokeContent] = useState('azer');

    
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
        <div className="container">
            <h2>Créez votre propre blague</h2>
            <form className="container" onSubmit={handleSubmit}>
                <textarea className="box jokes" value={jokeContent} onChange={handleChange}>azer</textarea>
                <button className="box button" type='submit'>Créer la blague</button>
            </form>
            <div className="box sign">
                <Link to="/accueil">Retour</Link>
            </div>
        </div>
    )
}

export default Home;