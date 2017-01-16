import { composeWithTracker } from 'react-komposer';
import { ResourceOrg } from './resource-org.js';
import { Loading } from '../../loading.js';
import { Meteor } from 'meteor/meteor';
import { Organizations } from '../../../../api/Organizations/Organizations'

const composer = (params, onData) => {
  const organizationSub = Meteor.subscribe('organization');
  if (organizationSub.ready()) {
    const org = Organizations.findOne({ownerId: Meteor.userId()});
    console.log(org)
    onData(null, { org });
  }
};

export default composeWithTracker(composer, Loading)(ResourceOrg);
