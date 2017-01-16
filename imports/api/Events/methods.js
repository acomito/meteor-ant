import { Organizations } from '../Organizations/Organizations'
import { Events } from './Events'

Meteor.methods({
	'Events.addEvent': function(data){
		check(data, Object);
		let org = Organizations.findOne({ownerId: this.userId});
		let dataToInsert = {
			title: data.title,
			description: data.description,
			location: data.location,
			time: data.time,
			date: data.date,
			tags: data.tags,
			clusters: data.clusters,
			stages: data.stages,
			organizationId: org._id,
		}
		console.log(dataToInsert);
		Events.insert(dataToInsert, {}, function(error, response){
			if (error) { console.log(error); return; }
			//send off call to a news method
		});
	},
	'Events.deleteEvent': function(eventId){
		check(eventId, String);
		console.log(eventId);
		Events.remove({_id: eventId});
	},
	'Events.attendEvent': function(eventId){
		check(eventId, String);

		let query = {_id: eventId, usersAttending: {$in:[this.userId]} };
		let alreadyAttending = Events.find(query).fetch();
		if (alreadyAttending.length > 0) {
			throw new Meteor.Error('already-attending', 'You are already attending this event!');
			return;
		}
		let docToUpdate = {_id: eventId}
		let inc = { numberAttending: 1};
		let addToSet = { usersAttending: this.userId };
		let dataToUpdate = { $inc: inc, $addToSet: addToSet };
		Events.update(docToUpdate, dataToUpdate);
	},
});