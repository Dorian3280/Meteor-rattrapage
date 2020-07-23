import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
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