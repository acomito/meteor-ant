import { browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { message } from 'antd';


const login = (email, password) => {

  Meteor.loginWithPassword(email, password, (error) => {
    
    if (error) { message.error(error.reason); return; }
    //else
    message.success('Logged in!');
    browserHistory.push('/');

  });
};


export const handleLogin = (email, password) => {
  login(email, password);
};

