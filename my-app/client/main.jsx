import { Meteor } from 'meteor/meteor';
import React from 'react';
import { hydrate } from 'react-dom';
import App from '/imports/ui/App';

Meteor.startup(() => {
  hydrate(<App />, document.getElementById("app"));
});
