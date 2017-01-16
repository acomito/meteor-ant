import { MessageThreads } from '../MessageThreads/MessageThreads';
import { Messages } from '../Messages/Messages';

Meteor.methods({
	'Messages.createThreadAndAddMessage': function(data){
		check(data, Object);
		let threadToInsert = {
			participants: [this.userId, data.recipientId],
			title: data.title,
		};
		MessageThreads.insert(threadToInsert, {}, function(error, response){
			if (error) { console.log(error); return; }
			console.log(response);
			let messageToinsert = {
				title: data.title,
				messageValue: data.messageValue,
				messageThreadId: response,
				recipientId: data.recipientId,
				senderId: this.userId
			}
			Messages.insert(messageToinsert);
		})
	} 
});