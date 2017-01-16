import { composeWithTracker } from 'react-komposer';
import { MasterAdvisors } from './master-advisors.js';
import { Loading } from '../../loading.js';
import { Meteor } from 'meteor/meteor';

const composer = (params, onData) => {
  const advisorsSub = Meteor.subscribe('advisors');
  if (advisorsSub.ready()) {
  	let query = { $in: ['advisor'] }
    const advisors = Meteor.users.find({roles: query}).fetch();
    onData(null, { advisors });
  }
};

export default composeWithTracker(composer, Loading)(MasterAdvisors);
