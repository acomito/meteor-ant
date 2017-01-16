import { composeWithTracker } from 'react-komposer';
import { StudentNews } from './student-news.js';
import { Loading } from '../../loading.js';
import { Meteor } from 'meteor/meteor';
import { News } from '../../../../api/News/News'
import { Organizations } from '../../../../api/Organizations/Organizations'
import { ResourceItems } from '../../../../api/ResourceItems/ResourceItems'


const mapNews = (queries) => {
	let mapped = queries.map(function(query){
		let user = {};
		let org = {};
		let resource = {};
		switch(query.newsType) {
			case 'studentSignup':
				user = Meteor.users.findOne({_id: query.studentId});
				query.user = user;
				return query
			case 'advisorSignup':
				user = Meteor.users.findOne({_id: query.advisorId});
				query.user = user;
				return query
			case "resourceOrgAdded":
				org = Organizations.findOne({_id: query.resourceOrgId});
				query.org = org;
				return query
			case "resourceItemAdded":
				org = Organizations.findOne({_id: query.resourceOrgId});
				resource = ResourceItems.findOne({_id: query.resourceItemId});
				query.org = org;
				query.resource = resource;
				return query
			default:
				return query;
		}

	});

	return mapped;
	
}

const composer = (params, onData) => {
  const newsSub = Meteor.subscribe('news');
  const usersSub = Meteor.subscribe('users');
  const organizationsSub = Meteor.subscribe('organizations');
  const resourceItemsSub = Meteor.subscribe('resourceItems');
  if (newsSub.ready() && usersSub.ready() && organizationsSub.ready() && resourceItemsSub.ready()) {
    const newsQuery = News.find({},{sort: {createdAt: -1}}).fetch();
    const news = mapNews(newsQuery);
    console.log(news)
    onData(null, { news });
  }
};

export default composeWithTracker(composer, Loading)(StudentNews);
