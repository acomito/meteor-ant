import { Businesses } from '../Businesses';

Meteor.publish('businesses', function(){
	return Businesses.find();
});