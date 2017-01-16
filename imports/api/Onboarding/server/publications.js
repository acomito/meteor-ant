import { Onboarding } from '../Onboarding'

Meteor.publish('onboarding', function(){
	return Onboarding.find({ownerId: this.userId});
});