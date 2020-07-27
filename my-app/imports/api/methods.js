import { Meteor } from 'meteor/meteor';
import JokesCollection from '.';

Meteor.methods({
    'joke.create': function jokeCreate(content) {
        if (!this.userId) {
            throw new Error('erreur');
        }
        JokesCollection.insert({
            content: content,
            userId: this.userId,
            createAt: new Date()
        });
    },
    'joke.getOne': function getOne() {
        const jokes = JokesCollection.find();
        const nbrJokes = jokes.count();
        if (nbrJokes === 0) {
            return {
              content: "Pas de blagues",
              author: '-',
            };
        }
        const randomNbr = Math.floor(Math.random() * nbrJokes);
        let joke = JokesCollection.findOne({}, {skip: randomNbr});
        joke.author = Meteor.users.findOne(joke.userId).username;
        return joke;
    }
});