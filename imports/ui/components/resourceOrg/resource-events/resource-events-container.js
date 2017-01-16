import { composeWithTracker } from 'react-komposer';
import { ResourceEvents } from './resource-events.js';
import { Loading } from '../../loading.js';
import { Meteor } from 'meteor/meteor';
import { Clusters } from '../../../../api/Clusters/Clusters'
import { Events } from '../../../../api/Events/Events'



const mapClusters = (clusters) => {
	let mapped = clusters.map(item => {
		let mappedItem = { value: item._id, label: item.title };
		return mappedItem
	})
	return mapped;
}

const composer = (params, onData) => {
  const clustersSub = Meteor.subscribe('clusters');
  const eventsSub = Meteor.subscribe('myEvents');
  if (clustersSub.ready() && eventsSub.ready()) {
    const clustersQuery = Clusters.find().fetch();
    const clusters = mapClusters(clustersQuery)
    const events = Events.find().fetch();
    onData(null, { clusters, events });
  }
};

export default composeWithTracker(composer, Loading)(ResourceEvents);