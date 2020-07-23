import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div>ERROR 404 - PAGE INTROUVABLE</div>
            <Link to="/">Retour à la page d&apos;accueil</Link>
        </div>
    )
}

export default ErrorPage;