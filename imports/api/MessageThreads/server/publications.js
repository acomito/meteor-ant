import { MessageThreads } from '../MessageThreads';

Meteor.publish('messageThreads', function(){
	return MessageThreads.find();
});


