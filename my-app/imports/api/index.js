import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Jokes = new Mongo.Collection('jokes');

const JokesList = new SimpleSchema({
    content: {
        type: String,
    },
    IdUser: {
        type: String,
    },
    createAt: {
        type: Date,
    }
});

Jokes.attachSchema(JokesList);

export default Jokes;