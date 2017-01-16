import { composeWithTracker } from 'react-komposer';
import { StudentEvents } from './student-events.js';
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



const mapEvents = (events) => {
  let mapped = events.map(event => {
    if (event.usersAttending && event.usersAttending.length > 0) {
      let users = Meteor.users.find({_id: { $in: event.usersAttending}}).fetch();
      event.users = users;
    }
    return event;
  });
  return mapped;
}

const composer = (params, onData) => {
  const clustersSub = Meteor.subscribe('clusters');
  const eventsSub = Meteor.subscribe('events');
  const usersSub = Meteor.subscribe('users');
  if (clustersSub.ready() && eventsSub.ready() && usersSub.ready()) {
    const clustersQuery = Clusters.find().fetch();
    const clusters = mapClusters(clustersQuery);
    const eventsQuery = Events.find({},{sort: { date: 1}}).fetch();
    const events = mapEvents(eventsQuery)
    console.log(events)
    onData(null, { clusters, events });
  }
};

export default composeWithTracker(composer, Loading)(StudentEvents);