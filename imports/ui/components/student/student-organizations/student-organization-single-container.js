import { composeWithTracker } from 'react-komposer';
import { StudentOrganizationSingle } from './student-organization-single.js';
import { Loading } from '../../loading.js';
import { Meteor } from 'meteor/meteor';
import { Organizations } from '../../../../api/Organizations/Organizations'

const composer = (props, onData) => {
  const organizationsSub = Meteor.subscribe('organizations');
  if (organizationsSub.ready()) {
    const org = Organizations.findOne({_id: props.id});
    console.log(org)
    onData(null, { org });
  }
};

export default composeWithTracker(composer, Loading)(StudentOrganizationSingle);