import { browserHistory } from 'react-router';
import { Accounts } from 'meteor/accounts-base';
import { imageConfig, appConfig } from './config';
import { message } from 'antd';

const { defaultUserAvatar } = imageConfig;
const { appName } = appConfig;


const signUp = (user) => {

  Accounts.createUser(user, (error) => {
    if (error) {
      message.error(error.reason);
    } else {
      browserHistory.push('/');
      message.error(`Welcome to ${appName}!`);
    }
  });
};


export const handleSignup = (firstName, lastName, emailAddress, password) => {
  let user = {
        email: emailAddress,
        password: password,
        profile: {
          name: {
            first: firstName,
            last: lastName,
            avatar: defaultUserAvatar
          },
        },
  };
    
    signUp(user);
};
