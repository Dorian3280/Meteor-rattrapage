import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container">
            <h1>Application Meteor</h1>
            <div className="box jokes">CHUCK NORRIS !!!!!!</div>
            <div className="box button">Une autre</div>
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