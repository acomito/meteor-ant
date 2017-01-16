import { browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { message } from 'antd';


const login = (email, password) => {

  Meteor.loginWithPassword(email, password, (error) => {
    
    if (error) { message.error(error.reason); return; }

    if (Roles.userIsInRole(Meteor.userId(), ['master'])) {
      browserHistory.push('/master/home');
      return;
    }
    if (Roles.userIsInRole(Meteor.userId(), ['student'])) {
      browserHistory.push('/student/home');
      message.success('Sucessfully logged in!');
      return;
    }
    if (Roles.userIsInRole(Meteor.userId(), ['resource'])) {
      browserHistory.push('/resource/home');
      message.success('Sucessfully logged in!');
      return;
    }
    if (Roles.userIsInRole(Meteor.userId(), ['advisor'])) {
      browserHistory.push('/advisor/home');
      return;
    }
    
    //else
    Bert.alert('Logged in!', 'success');
    browserHistory.push('/');
    return;

  });
};


export const handleLogin = (email, password) => {
  login(email, password);
};
