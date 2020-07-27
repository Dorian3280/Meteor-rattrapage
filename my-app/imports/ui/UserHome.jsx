import { Meteor } from 'meteor/meteor';
import React, { useCallback } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';

const Home = ( {history} ) => {
    let user =  useTracker(() => Meteor.userId(), []);

    console.log(user);
    if (!user) {
        history.push('/');
    }

    const logout = useCallback(() => {
        Meteor.logout();
        history.push('/');
    }, [])
    return (
        <div className="container">
            <h2>Accueil</h2>
            <div className="box jokes">CHUCK NORRIS !!!!!!</div>
            <div className="box button">Une autre</div>
            <div className="box sign">
                <Link to="/creez-votre-blague">Créez votre propre blague</Link>
            </div>
            <div className="box sign" onClick={logout}>Deconnexion</div>
        </div>
    )
}

export default Home;