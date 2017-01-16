import { News } from '../News';

Meteor.publish('news', function(){
	return News.find();
});