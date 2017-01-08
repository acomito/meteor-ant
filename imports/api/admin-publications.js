
Meteor.publish('admin.allUsers', function(){
	let query = { roles: { $nin: ['admin']} }
	return Meteor.users.find(query);
});