import { Roles } from 'meteor/alanning:roles'
import { notAdmin, notSignedIn } from './error-enums';


Meteor.methods({

	// ========================================================
	// DELETE USER
	// ========================================================
	'admin.deleteUser': function(userId){
		check(userId, String);

		//check if logged in
		if (!this.userId) { throw new Meteor.Error(notSignedIn.title, notSignedIn.text); }
		//check if admin
		if (!Roles.userIsInRole(this.userId, [ 'admin'])) { throw new Meteor.Error(notAdmin.title, notAdmin.text); }

		return Meteor.users.update({_id: userId}, { $set: {deleted: true} });
	},

	// ========================================================
	// ANOTHER METHOD BELOW HERE
	// ========================================================


});
