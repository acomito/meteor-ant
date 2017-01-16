import { Messages } from '../Messages';

Meteor.publish('messages', function(){
	return Messages.find();
});


