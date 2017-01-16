import { Organizations } from '../Organizations';

Meteor.publish('organization', function(){
	return Organizations.find({ ownerId: this.userId });
});

Meteor.publish('organizations', function(){
	return Organizations.find();
});