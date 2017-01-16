import { Onboarding } from './Onboarding'


Meteor.methods({
	'onboarding.toggleOnboarding': function(key){
		check(key, String);
		let dataToUpdate = {
			[key]: true
		}
		Onboarding.update({ownerId: this.userId}, { $set: dataToUpdate})
	}
})