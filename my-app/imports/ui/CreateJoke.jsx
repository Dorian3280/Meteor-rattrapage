import React, { useCallback, useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';

const Home = ( {history} ) => {
    const [jokeContent, setJokeContent] = useState('azer');

    let user =  useTracker(() => Meteor.userId(), []);

    if (!user) {
        history.push('/');
    }

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