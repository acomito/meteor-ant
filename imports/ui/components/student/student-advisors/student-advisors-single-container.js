import { composeWithTracker } from 'react-komposer';
import { StudentAdvisorsSingle } from './student-advisors-single.js';
import { Loading } from '../../loading.js';
import { Meteor } from 'meteor/meteor';

const composer = (props, onData) => {
  const advisorsSub = Meteor.subscribe('advisors');
  if (advisorsSub.ready()) {
  	let query = { $in: ['advisor'] }
    const advisor = Meteor.users.findOne({_id: props.id });
    onData(null, { advisor });
  }
};

export default composeWithTracker(composer, Loading)(StudentAdvisorsSingle);
