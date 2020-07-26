import React, { useState, useCallback } from 'react';

const SessionConstext = React.createContext({});

export default SessionConstext;

export const SessionProvider = ({ children }) => {
    const [ users, setUsers ] = useState([]);
    const [ currentUser, setCurrentUser ] = useState({});

    const signUp = useCallback((user) => {
        user.id = users.length + 1;
        const newUsers = [...users];
        newUsers.push(user);
        setUsers(newUsers);
        setCurrentUser(user);
    }, [ users ]);

    const signIn = useCallback((user) => {
        const found = users.find(({ username }) => username === user.username);

        if (!found) {
            throw new Error('Nom d\'utilisateur incorrect');
        }
        
        if (found.password !== user.password) {
            throw new Error('Mot de passe incorrect');
        }

        setCurrentUser(found);
    }, [users])

    return (
        <SessionConstext.Provider
            value={{
                currentUser,
                signIn,
                signUp
            }}
        >
            {children}
        </SessionConstext.Provider>
    )
};