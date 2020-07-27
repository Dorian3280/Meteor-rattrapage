import { Meteor } from 'meteor/meteor';
import JokesCollection from '.';

Meteor.methods({
    'joke.create': function jokeCreate(content) {
        
        // Si il n'est pas connecté
        if (!this.userId) {
            throw new Error('erreur');
        }
        
        JokesCollection.insert({
            content,
            userId: this.userId,
            createAt: new Date()
        });
    },
    'joke.getOne': function getOne() {
        const nbrJokes = JokesCollection.find().count();
        if (nbrJokes === 0) {
            return {
              content: "Il n'y a pas de blagues",
              author: '-',
            };
        }
        let joke = JokesCollection.findOne({}, {skip: Math.floor(Math.random() * nbrJokes)});
        joke.author = Meteor.users.findOne(joke.userId).username;

        return joke;
    }
});