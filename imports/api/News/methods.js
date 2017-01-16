import { News } from './News'
import { Businesses } from '../Businesses/Businesses'
import { Organizations } from '../Organizations/Organizations'
import { Onboarding } from '../Onboarding/Onboarding'

Meteor.methods({
	'News.addNews': function(data){
		check(data, Object);
		let dataToInsert = {
			title: 'My News Info',
			body: '<p>This is my news!!</p>',
			newsType: 'master'
		};

		return News.insert(dataToInsert);

	},
	'News.createNews': function(roleType){
		check(roleType, String);
		let dataToInsert = { };
		switch (roleType) {
			case 'advisor':
				dataToInsert = { newsType: 'advisorSignup', advisorId: this.userId };
				News.insert(dataToInsert);
				break
			case 'student':
				dataToInsert = { newsType: 'studentSignup', studentId: this.userId };
				News.insert(dataToInsert);
				break
			default:
				return;
		}
		
	},
	'News.resourceOrgAdded': function(orgId){
		check(orgId, String);
		let org = Organizations.findOne({_id: orgId})
		let dataToInsert = { newsType: 'resourceOrgAdded', resourceOrgId: orgId };
		News.insert(dataToInsert);
	},
	'News.resourceItemAdded': function(resourceId, orgId){
		check(resourceId, String);
		check(orgId, String);
		let dataToInsert = { newsType: 'resourceItemAdded', resourceOrgId: orgId, resourceItemId: resourceId };
		News.insert(dataToInsert);
	},
	'News.businessAdded': function(businessId){
		check(businessId, String);

		let business = Businesses.findOne({_id: businessId});

		let newsItem = {
			title: `Anthony created a business!`,
			body: `the businesses added is called ${business.title}`,
			newsType: 'businessAdded'
		}
		console.log(newsItem)
		News.insert(newsItem);

	}
});