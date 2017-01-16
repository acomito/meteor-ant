import { composeWithTracker } from 'react-komposer';
import { StudentsList } from './StudentsList';
import 'antd/lib/spin/style/css';
import { Loading } from '../../loading';
import { Spin } from 'antd';
import { Meteor } from 'meteor/meteor';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('students');
  if (subscription.ready()) {
  	let query = { $in: ['student'] }
    const students = Meteor.users.find({roles: query }).fetch();
    console.log(students)
    onData(null, { students });
  }
};

export default composeWithTracker(composer, Loading)(StudentsList);
