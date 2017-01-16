/*import faker from 'faker';
import uniqueRandomArray from 'unique-random-array';
import { Clusters } from '../../../api/Clusters/Clusters';
import { seedOrgType, seedStages } from '../../../modules/helpers';


let clustersQuery = Clusters.find().fetch();

let mappedClusters = clustersQuery.map(function(item){
	return item._id;
});

let mappedStages = seedStages.map(function(item){
	return item.value;
})

let mappedOrgTypes = seedOrgType.map(function(item){
	return item.value;
})

// UNQIUE RANDOM GENERATORS
// ==============================
let randomOrgType = uniqueRandomArray(seedOrgType);
let randomCluster = uniqueRandomArray(mappedClusters);
let randomStage = uniqueRandomArray(mappedStages);

let admin = Meteor.users.findOne({roles: {$in: ['advisor']}});
console.log(admin);

export const seedOrgType = [
  'local government', 
  'state government', 
  'federal government',
  'university department', 
  'university affiliate', 
  'local non-profit', 
  'other',
  'incubator & coworking',
  'local business',
];



let orgs = [
	{
		_id: 1,
		title: 'University Department of Technology & Engineering',
		orgType: 'university department',
		resourceItems: [
			{
				title: `SMB Incentive Program`,
				description: faker.lorem.sentence(),
				location: `${faker.address.streetAddress()} ${faker.address.streetName()}`,
				resourceType: 'incentive',
				stages: ['existing'],
				clusters: [randomCluster(), randomCluster()],
				schemaVersion: 0,
				//base
				createdAt: new Date(),
				updatedAt: new Date(),
				ownerId: admin._id,
				deleted: false,
			}
		],
	},
	{
		_id: 2,
		title: 'University Department of the Arts',
		orgType: 'university department',
		resourceItems: [
			{
				title: `SMB Incentive Program`,
				description: faker.lorem.sentence(),
				location: `${faker.address.streetAddress()} ${faker.address.streetName()}`,
				resourceType: 'incentive',
				stages: ['existing'],
				clusters: [randomCluster(), randomCluster()],
				schemaVersion: 0,
				//base
				createdAt: new Date(),
				updatedAt: new Date(),
				ownerId: admin._id,
				deleted: false,
			}
		],
	},
	{
		_id: 3,
		title: 'University Department of the Arts',
		orgType: 'university department',
		resourceItems: [
			{
				title: `SMB Incentive Program`,
				description: faker.lorem.sentence(),
				location: `${faker.address.streetAddress()} ${faker.address.streetName()}`,
				resourceType: 'incentive',
				stages: ['existing'],
				clusters: [randomCluster(), randomCluster()],
				schemaVersion: 0,
				//base
				createdAt: new Date(),
				updatedAt: new Date(),
				ownerId: admin._id,
				deleted: false,
			}
		],
	},
	{
		_id: 4,
		title: 'Local Angel Investment Group',
		orgType: 'local business',
		resourceItems: [
			{
				title: `SMB Incentive Program`,
				description: faker.lorem.sentence(),
				location: `${faker.address.streetAddress()} ${faker.address.streetName()}`,
				resourceType: 'incentive',
				stages: ['existing'],
				clusters: [randomCluster(), randomCluster()],
				schemaVersion: 0,
				//base
				createdAt: new Date(),
				updatedAt: new Date(),
				ownerId: admin._id,
				deleted: false,
			}
		],
	},
	{
	   _id: 5,
	   title: 'University Entreprenuership Center',
	   orgType: 'university department',
	   resourceItems: [
			{
				title: `SMB Incentive Program`,
				description: faker.lorem.sentence(),
				location: `${faker.address.streetAddress()} ${faker.address.streetName()}`,
				resourceType: 'incentive',
				stages: ['existing'],
				clusters: [randomCluster(), randomCluster()],
				schemaVersion: 0,
				//base
				createdAt: new Date(),
				updatedAt: new Date(),
				ownerId: admin._id,
				deleted: false,
			}
		],
	},
	{
	   _id: 6,
	   title: 'Local CDFI',
	   orgType: 'local non-profit',
	   resourceItems: [
			{
				title: `SMB Incentive Program`,
				description: faker.lorem.sentence(),
				location: `${faker.address.streetAddress()} ${faker.address.streetName()}`,
				resourceType: 'incentive',
				stages: ['existing'],
				clusters: [randomCluster(), randomCluster()],
				schemaVersion: 0,
				//base
				createdAt: new Date(),
				updatedAt: new Date(),
				ownerId: admin._id,
				deleted: false,
			}
		],
	},
	{
	   _id: 7,
	   title: 'University Law Department',
	   orgType: 'university department',
	   resourceItems: [
			{
				title: `SMB Incentive Program`,
				description: faker.lorem.sentence(),
				location: `${faker.address.streetAddress()} ${faker.address.streetName()}`,
				resourceType: 'incentive',
				stages: ['existing'],
				clusters: [randomCluster(), randomCluster()],
				schemaVersion: 0,
				//base
				createdAt: new Date(),
				updatedAt: new Date(),
				ownerId: admin._id,
				deleted: false,
			}
		],
	},
	{
		_id: 8,
		title: 'Local Incubator',
		orgType: 'local non-profit',
		resourceItems: [
			{
				title: `SMB Incentive Program`,
				description: faker.lorem.sentence(),
				location: `${faker.address.streetAddress()} ${faker.address.streetName()}`,
				resourceType: 'incentive',
				stages: ['existing'],
				clusters: [randomCluster(), randomCluster()],
				schemaVersion: 0,
				//base
				createdAt: new Date(),
				updatedAt: new Date(),
				ownerId: admin._id,
				deleted: false,
			}
		],
	},
	{
		_id: 9,
		title: 'Local SBDC',
		orgType: 'other',
		resourceItems: [
			{
				title: `SMB Incentive Program`,
				description: faker.lorem.sentence(),
				location: `${faker.address.streetAddress()} ${faker.address.streetName()}`,
				resourceType: 'incentive',
				stages: ['existing'],
				clusters: [randomCluster(), randomCluster()],
				schemaVersion: 0,
				//base
				createdAt: new Date(),
				updatedAt: new Date(),
				ownerId: admin._id,
				deleted: false,
			}
		],
	},
	{
		_id: 10,
		title: 'Local Bank',
		orgType: 'local business',
		resourceItems: [
			{
				title: `SMB Incentive Program`,
				description: faker.lorem.sentence(),
				location: `${faker.address.streetAddress()} ${faker.address.streetName()}`,
				resourceType: 'incentive',
				stages: ['existing'],
				clusters: [randomCluster(), randomCluster()],
				schemaVersion: 0,
				//base
				createdAt: new Date(),
				updatedAt: new Date(),
				ownerId: admin._id,
				deleted: false,
			}
		],
	},
	{
		_id: 11,
		title: 'Community Non-Profit',
		orgType: 'local non-profit',
		resourceItems: [
			{
				title: `SMB Incentive Program`,
				description: faker.lorem.sentence(),
				location: `${faker.address.streetAddress()} ${faker.address.streetName()}`,
				resourceType: 'incentive',
				stages: ['existing'],
				clusters: [randomCluster(), randomCluster()],
				schemaVersion: 0,
				//base
				createdAt: new Date(),
				updatedAt: new Date(),
				ownerId: admin._id,
				deleted: false,
			}
		],
	},
	{
		_id: 12,
		title: 'State Economic Department',
		orgType: 'state government',
		resourceItems: [
			{
				title: `SMB Incentive Program`,
				description: faker.lorem.sentence(),
				location: `${faker.address.streetAddress()} ${faker.address.streetName()}`,
				resourceType: 'incentive',
				stages: ['existing'],
				clusters: [randomCluster(), randomCluster()],
				schemaVersion: 0,
				//base
				createdAt: new Date(),
				updatedAt: new Date(),
				ownerId: admin._id,
				deleted: false,
			}
		],
	},
	{
		_id: 13,
		title: 'City Economic Department',
		orgType: 'local government',
		resourceItems: [
			{
				title: `SMB Incentive Program`,
				description: faker.lorem.sentence(),
				location: `${faker.address.streetAddress()} ${faker.address.streetName()}`,
				resourceType: 'incentive',
				stages: ['existing'],
				clusters: [randomCluster(), randomCluster()],
				schemaVersion: 0,
				//base
				createdAt: new Date(),
				updatedAt: new Date(),
				ownerId: admin._id,
				deleted: false,
			}
		],
	},
];

const resourceSuffix = [
	'Finance ',
	'Advising ',
	'Entreprenuership ',
	'Loan '
];

const resourceType = ['finance', 'general-user', 'events', ]

let randomResourceSuffix = uniqueRandomArray(resourceSuffix);
let randomResourceType = uniqueRandomArray(resourceType);

let getRandomOrg = uniqueRandomArray(orgs);

export const getOrganization = () => {

	let org = {
		title: faker.company.companyName(),
		description: faker.company.catchPhrase(),
		location: `${faker.address.streetAddress()} ${faker.address.streetName()}`,
		orgType: randomOrgType(),
		stages: [randomStage()],
		clusters: [randomCluster(), randomCluster(), randomCluster()],
		schemaVersion: 0,
		image: faker.image.business(),
		website: faker.internet.url(),
		//base
		createdAt: new Date(),
		updatedAt: new Date(),
		ownerId: admin._id,
		deleted: false,
	}
	let orgData = getRandomOrg()
	org.title = orgData.title;
	org.orgType = orgData.orgType;
	return org

};







export const getResourceItem = () => {

	let resourceItem = {
		title: `${randomResourceSuffix()} Program`,
		description: faker.lorem.sentence(),
		location: `${faker.address.streetAddress()} ${faker.address.streetName()}`,
		resourceType: randomResourceType(),
		stages: [randomStage()],
		clusters: [randomCluster()],
		schemaVersion: 0,
		//base
		createdAt: new Date(),
		updatedAt: new Date(),
		ownerId: admin._id,
		deleted: false,
	}

	return resourceItem;

};













*/