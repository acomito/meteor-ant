import { ResourceItems } from '../ResourceItems';

Meteor.publish('resourceItem', function(){
	return ResourceItems.find();
});

Meteor.publish('resourceItems', function(){
	return ResourceItems.find();
});