import { composeWithTracker } from 'react-komposer';
import { ResourceItemsList } from './resource-items.js';
import { Loading } from '../../loading.js';
import { Meteor } from 'meteor/meteor';
import { ResourceItems } from '../../../../api/ResourceItems/ResourceItems'

const composer = (params, onData) => {
  const resourceItemsSub = Meteor.subscribe('resourceItems');
  if (resourceItemsSub.ready()) {
    const items = ResourceItems.find().fetch();
    console.log(items)
    onData(null, { items });
  }
};

export default composeWithTracker(composer, Loading)(ResourceItemsList);