import { composeWithTracker } from 'react-komposer';
import { StudentSingle } from './StudentSingle';
import 'antd/lib/spin/style/css';
import { Loading } from '../../loading';
import { Spin } from 'antd';
import { Meteor } from 'meteor/meteor';

const composer = (props, onData) => {
  const subscription = Meteor.subscribe('students');
  if (subscription.ready()) {
  	let query = { $in: ['student'] }
    const student = Meteor.users.findOne({_id: props.id});
    console.log(student)
    onData(null, { student });
  }
};

export default composeWithTracker(composer, Loading)(StudentSingle);
