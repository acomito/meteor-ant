import { composeWithTracker } from 'react-komposer';
import { StudentMessages } from './student-messages.js';
import { Loading } from '../../loading.js';
import { Meteor } from 'meteor/meteor';
import { MessageThreads } from '../../../../api/MessageThreads/MessageThreads'

const composer = (params, onData) => {
  const messageThreadsSub = Meteor.subscribe('messageThreads');
  if (messageThreadsSub.ready()) {
  	let query = { $in: [Meteor.userId()] }
    const threads = MessageThreads.find({participants: query}).fetch();
    console.log(threads)
    onData(null, { threads });
  }
};

export default composeWithTracker(composer, Loading)(StudentMessages);
