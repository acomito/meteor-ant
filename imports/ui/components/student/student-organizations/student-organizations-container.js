import { composeWithTracker } from 'react-komposer';
import { StudentOrganizations } from './student-organizations.js';
import { Loading } from '../../loading.js';
import { Meteor } from 'meteor/meteor';
import { Organizations } from '../../../../api/Organizations/Organizations'

const composer = (params, onData) => {
  const organizationsSub = Meteor.subscribe('organizations');
  if (organizationsSub.ready()) {
    const orgs = Organizations.find().fetch();
    console.log(orgs)
    onData(null, { orgs });
  }
};

export default composeWithTracker(composer, Loading)(StudentOrganizations);
