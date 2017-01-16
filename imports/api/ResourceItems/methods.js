import { ResourceItems } from './ResourceItems'
import { Organizations } from '../Organizations/Organizations'




Meteor.methods({
	'resourceItems.addResource': function(data){
		check(data, Object);
		
		let org = Organizations.findOne({ownerId: this.userId});
		let dataToInsert = {
			title: data.title,
			description: data.description,
			resourceType: data.resourceType,
			stages: data.stages,
			tags: data.tags,
			parentId: org._id
		}
		console.log(dataToInsert);
		ResourceItems.insert(dataToInsert, {}, function(error, response){
			if (error) { throw new Meteor.Error('ResourceItemsError', 'ResourceItemsError'); }
			Meteor.call('News.resourceItemAdded', response, org._id);
		})

		
	}
})