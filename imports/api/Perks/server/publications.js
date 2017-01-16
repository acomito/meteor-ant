import { Perks } from '../Perks';

Meteor.publish('perks', function(){
	return Perks.find();
});