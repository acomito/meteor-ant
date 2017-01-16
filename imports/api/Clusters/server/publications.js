import { Clusters } from '../Clusters';
import { Meteor } from 'meteor/meteor';

Meteor.publish('clusters', function(){
	return Clusters.find();
})