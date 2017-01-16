import { Businesses } from './Businesses'

Meteor.methods({
	'Businesses.addBusiness': function(data){
		check(data, Object);

		let dataToInsert = {
			title: data.title,
			description: data.description,
			help: [data.help],
			stage: data.stage
		}
		return Businesses.insert(dataToInsert, {}, function(error, response){
			if (error) { throw new Meteor.Error('biz-error', 'error creating your business profile'); }
			Meteor.call('News.businessAdded', response);
		});
	}
});
