import { composeWithTracker } from 'react-komposer';
import { StudentProfile } from './student-profile.js';
import { Loading } from '../../loading.js';
import { Meteor } from 'meteor/meteor';

const composer = (params, onData) => {
  const studentProfileSub = Meteor.subscribe('userProfile');
  if (studentProfileSub.ready()) {
    const user = Meteor.users.findOne({_id: Meteor.userId()});
    onData(null, { user });
  }
};

export default composeWithTracker(composer, Loading)(StudentProfile);
