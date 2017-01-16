import { Events } from '../Events';

Meteor.publish('events', function(){
	return Events.find();
});


Meteor.publish('myEvents', function(){
	return Events.find({ ownerId: this.userId });
});

