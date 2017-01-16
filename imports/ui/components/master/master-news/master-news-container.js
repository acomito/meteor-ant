import { composeWithTracker } from 'react-komposer';
import { News } from '../../../../api/News/News.js';
import { MasterNews } from './master-news.js';
import { Loading } from '../../loading.js';
import { Meteor } from 'meteor/meteor';

const composer = (params, onData) => {
  const newsSub = Meteor.subscribe('news');
  if (newsSub.ready()) {
    const news = News.find({},{sort: {createdAt: -1}}).fetch();
    onData(null, { news });
  }
};

export default composeWithTracker(composer, Loading)(MasterNews);
