import { Onboarding } from './Onboarding/Onboarding'
import { News } from './News/News'
import { Events } from './Events/Events'

Meteor.methods({
	'utilities.users.saveStudentProfile': function(data){
		check(data, Object);
		let dataToUpdate = { 
			'profile.name.first':  data.firstName,
			'profile.name.last':  data.lastName,
			'profile.graduationYear':  data.graduationYear,
			'profile.skills': data.skills,
			'profile.needs': data.needs,
			'profile.major': data.major,
		}
		console.log(dataToUpdate);
		Meteor.users.update({_id: this.userId}, { $set: dataToUpdate });

	},
	'utilities.users.saveSettings': function(data){
		check(data, Object);
		let dataToUpdate = {
			'profile.settings': {
				email_Student_Resources: data.email_Student_Resources,
            	email_Student_Advisors: data.email_Student_Advisors,
            	email_Student_Events: data.email_Student_Events
			}
		}
		Meteor.users.update({_id: this.userId}, { $set: dataToUpdate });
	},
	'utilities.users.saveAvatar': function(imageUrl){
		check(imageUrl, String);
		let docToUpdate = { 'profile.avatar': imageUrl };
		Meteor.users.update({_id: this.userId}, { $set: docToUpdate });
	},
	'utilities.signup.addRoleOnSignup': function(roleType){
		check(roleType, String);
		 Roles.addUsersToRoles(this.userId, [roleType]);
		 Meteor.call('utilities.signup.createOnboarding', roleType);
		 Meteor.call('News.createNews', roleType);
	},
	'utilities.signup.createOnboarding': function(roleType){
		check(roleType, String);
		let dataToInsert = {
			ownerId: this.userId
		}
		Onboarding.insert(dataToInsert)
	},
	'utilities.signup.deleteAccount': function(){
		News.remove({studentId: this.userId});
		let eventToUpdate = {usersAttending: { $in: [this.userId]}};
		let userToPull = { $pull: { usersAttending: {$in: [this.userId]} } };
		Events.update(eventToUpdate, userToPull);
		Meteor.users.remove({ _id: this.userId });
	}
});