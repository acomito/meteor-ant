
Meteor.publish('admin.allUsers', function(){
	let query = { roles: { $nin: ['admin']} }
	return Meteor.users.find(query);
});




let defaultOptions = { fields: { profile: 1, emails: 1, roles: 1 } };

Meteor.publish('userProfile', function(){
	return Meteor.users.find({_id: this.userId}, defaultOptions);
});

Meteor.publish('users', function(){
	return Meteor.users.find({}, defaultOptions);
});


Meteor.publish('students', function(){
	let query = { $in: ['student'] }
	return Meteor.users.find({roles: query }, defaultOptions);
});


Meteor.publish('advisors', function(){
	let query = { $in: ['advisor'] }
	return Meteor.users.find({}, defaultOptions);
});

