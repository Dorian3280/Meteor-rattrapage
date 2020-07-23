import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container">
            <h2>Accueil</h2>
            <div className="box jokes">CHUCK NORRIS !!!!!!</div>
            <div className="box button">Une autre</div>
            <div className="box sign">
                <Link to="/creez-votre-blague">Créez votre propre blague</Link>
            </div>
            <div className="box sign">
                <Link to="/">Déconnexion</Link>
            </div>
        </div>
    )
}

export default Home;