import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';

const Home = ( {history} ) => {
    let user =  useTracker(() => Meteor.userId(), []);

    console.log(user);
    if (!user) {
        history.push('/');
    }
    
    return (
        <div className="container">
            <h2>Créez votre propre blague</h2>
            <div className="box jokes">CHUCK NORRIS !!!!!!</div>
            <div className="box button">Créer la blague</div>
            <div className="box sign">
                <Link to="/accueil">Retour</Link>
            </div>
        </div>
    )
}

export default Home;