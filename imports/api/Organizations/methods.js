import { Organizations } from './Organizations'

Meteor.methods({
	'Organizations.addOrganization': function(data){
		check(data, Object);

		const { orgType, stages, title, description, tags, location } = data

      	let dataToInsert = { orgType, stages, title, description, tags, location };

		Organizations.insert(dataToInsert, {}, function(error, response){
			if (error) { throw new Meteor.Error(error, error); }
			Meteor.call('News.resourceOrgAdded', response);
		});
	}
});