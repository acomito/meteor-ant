//top-level
import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
//components
import { StudentThread } from './student-thread.js';
import { Loading } from '../../loading.js';
//APIs
import { Messages } from '../../../../api/Messages/Messages'
import { MessageThreads } from '../../../../api/MessageThreads/MessageThreads'


const mapUsersToItem = (items) => {
	let messages = items.map(function(item){
		let user = Meteor.users.findOne({_id: item.ownerId});
		item.user = user;
		return item;
	});
	return messages;
}

const mapParticipants = (userIds) => {
	let participants = userIds.map(function(id){
		let user = Meteor.users.findOne({_id: id});
		let userName = user.profile.name.first;
		return userName;
	});
	
	return participants;
}



const composer = (props, onData) => {
	
  	const messagesSub = Meteor.subscribe('messages'); // subscriptions
  	const messageThreadsSub = Meteor.subscribe('messageThreads'); // subscriptions
  	const usersSub = Meteor.subscribe('users'); // subscriptions
  	
  	if (messagesSub.ready() && messageThreadsSub.ready() && usersSub.ready()) { //wait for subscription
  		//created query
  		let query = {messageThreadId: props.id}
  		let options = {sort: { createdAt: -1}};
    	const messagesQuery = Messages.find(query, options).fetch(); // query
    	let messages = mapUsersToItem(messagesQuery);
    	let thisThread = MessageThreads.findOne({_id: props.id});
    	let participants = mapParticipants(thisThread.participants);
    	console.log(participants)

    	onData(null, { messages, participants }); //pass data to component
  }
};

export default composeWithTracker(composer, Loading)(StudentThread);
