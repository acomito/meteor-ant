import { composeWithTracker } from 'react-komposer';
import { AdvisorStudents } from './advisor-students.js';
import { Loading } from '../../loading.js';
import { Meteor } from 'meteor/meteor';

const composer = (params, onData) => {
  const studentsSub = Meteor.subscribe('students');
  if (studentsSub.ready()) {
  	let query = { $in: ['student'] }
    const students = Meteor.users.find({roles: query}).fetch();
    onData(null, { students });
  }
};

export default composeWithTracker(composer, Loading)(AdvisorStudents);
