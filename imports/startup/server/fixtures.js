import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Accounts } from 'meteor/accounts-base';
import { clusters } from '../../modules/lib';
import { Clusters } from '../../api/Clusters/Clusters';
import { Events } from '../../api/Events/Events';
import { Organizations } from '../../api/Organizations/Organizations';
import { ResourceItems } from '../../api/ResourceItems/ResourceItems';
import { Perks } from '../../api/Perks/Perks';
import { seedAdvisors, orgs, getResourceItem } from './seed-lib';

const seedAdvisorsExist = Meteor.users.find({roles: {$in: ['seed']}}).fetch();


if (!seedAdvisorsExist || seedAdvisorsExist.length === 0) {
      
      seedAdvisors.forEach( user => { 
        Accounts.createUser(user);
      });
      seedAdvisors.forEach( user => { 
        let userRecord = Meteor.users.findOne({'profile.name': { first: user.profile.name.first, last: user.profile.name.last }});
        Roles.addUsersToRoles(userRecord._id, ['advisor', 'seed']);
      });

}



const perksExist = Perks.find({},{limit: 1});

if (!perksExist || perksExist.length === 0) {
    let perksToSeed = [
        {
          organizationTitle: 'QuickBooks',
          contentLink: 'https://www.google.com',
          code: '#5555555',
          image: 'https://pbs.twimg.com/profile_images/760157914686296064/GsQy4dCZ.jpg',
          description: "QuickBooks is Intuit Inc's set of software solutions designed to manage payroll, inventory, sales and other needs of a small business. The software's features include marketing tools, merchant services, product and supplies, training solutions.",
          title: '20% Quickbooks',
          perkType: 'coupon',
        },
        {
          organizationTitle: 'SalesForce',
          contentLink: 'https://www.google.com',
          code: '#LOLOLOL',
          image: 'https://login.salesforce.com/img/logo198.png',
          description: 'salesforce.com, inc. provides enterprise cloud computing applications. ',
          title: 'Free for 2 Months',
          perkType: 'coupon',
        },
        {
          organizationTitle: 'UserTesting',
          contentLink: 'https://www.google.com',
          code: '#LOLOLOL',
          image: 'https://s3.amazonaws.com/awsmp-logos/User_Testing.png',
          description: 'UserTesting is the fastest way to get feedback',
          title: 'Free for web or mobile usability testing',
          perkType: 'perkType',
        }
    ] 
}


/**/

const users = [{
  email: 'admin@admin.com',
  password: 'password',
  profile: {
    name: { first: 'Carl', last: 'Winslow' },
  },
  roles: ['admin'],
}];

users.forEach(({ email, password, profile, roles }) => {
  const userExists = Meteor.users.findOne({ 'emails.address': email });

  if (!userExists) {
    const userId = Accounts.createUser({ email, password, profile });
    Roles.addUsersToRoles(userId, roles);
  }
});





const masterExists = Meteor.users.findOne({ 'roles': {$in: ['master']} });


if (!masterExists) {
  const masterAccount = {
    email: 'master@master.com',
    password: 'password',
    profile: {
      name: { first: 'Carl', last: 'Winslow' },
    }
  };
  let userId = Accounts.createUser({ email: masterAccount.email, password: masterAccount.password, profile: masterAccount.profile });
  Roles.addUsersToRoles(userId, ['master']);
}

const clustersExist = Clusters.find({},{limit: 1}).fetch();

if (!clustersExist || clustersExist.length === 0 ) {
  let admin = Meteor.users.findOne({roles: {$in: ['admin']}});
  clusters.forEach(function(cluster){
    let docToInsert = {
      title: cluster.label,
      ownerId: admin._id
    }
    Clusters.insert(docToInsert);
    console.log('inserted')
  });

}

Meteor.methods({
  'seedOrganization': function(org){
    check(org, Object);
    console.log(org._id)
    let { 
      title, 
      description, 
      tags, 
      serviceTypes, 
      orgType, 
      location, 
      resourceType, 
      stages, 
      clusters, 
      schemaVersion, 
      createdAt, 
      updatedAt, 
      ownerId 
    } = org;
    let orgToInsert = { title, tags, orgType, serviceTypes,  description, location, resourceType, stages, clusters, schemaVersion, createdAt, updatedAt, ownerId };
    let resourceItem = org.resourceItems[0];
    let event = org.event;
    Organizations.insert(orgToInsert, {}, function(error, response){
      if (error) { console.log(error); return; }
      //send a method to insert a news item for organization added
      //console.log(resourceItem);
      //console.log(event);
      resourceItem.resourceOrgId = response;
      Meteor.call('insertResourceItem', resourceItem, event);
    });
  },
  insertResourceItem: function(resourceItem, event){
    check(resourceItem, Object);
    check(event, Object);
    ResourceItems.insert(resourceItem, {}, function(error, response){
      if (error) { console.log(error); return; };
      console.log(resourceItem.title);
      event.resourceOrgId = resourceItem.resourceOrgId;
      Meteor.call('insertEvent', event);
    });
  },
   insertEvent: function(event){
    check(event, Object);
    Events.insert(event);
  }
});



let organizations = Organizations.find().fetch();
console.log(organizations.length);

if ( organizations.length === 0 ) {
  console.log('run it ho!');
  orgs.forEach(function(org){
    Meteor.call('seedOrganization', org, function(error, response){
      if (error) { console.log('error'); return; };
    });
  });
}


// 1. see if orgnaizations exist
// 2. get array of organizations, forEach over them
  // 3. in callback, insert news item
    // 4. in callback insert resource
      // 5. in callback insert resource
        // 5. in callback insert event
// 1. see if orgnaizations exist


// ORGANIZATIONS & EVENTS
// ======================================================================



/*let organizations = Organizations.find().fetch();


if ( organizations.length === 0 ) {

  let generatedOrgs = [];

  for (i = 0; i < 50; i++) {
    let newOrg = getOrganization();
    generatedOrgs.push(newOrg);
  }

  generatedOrgs.forEach(function(org){
    Organizations.insert(org, {}, function(error, response){
      let resourceToInsert = getResourceItem();
      resourceToInsert.parentId = response;
      ResourceItems.insert(resourceToInsert);
    });
  });

}
*/


