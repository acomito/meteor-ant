import { browserHistory } from 'react-router';
import { Accounts } from 'meteor/accounts-base';
import { Bert } from 'meteor/themeteorchef:bert';
import { Meteor } from 'meteor/meteor';
import {Roles} from 'meteor/alanning:roles';
import 'antd/lib/notification/style/css';

import { notification } from 'antd';
import { appConfig } from './config';

// CONSTANTS
// --------------------------------
const { appName, defaultAvatar } = appConfig;


// Not sure this is still in use...
// --------------------------------
const signUp = (user, role, goToUrl) => {

  Accounts.createUser(user, (error) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      console.log(role)
      Roles.addUsersToRoles(Meteor.userId(), [role]);
      browserHistory.push(goToUrl);
      Bert.alert('Welcome to GrowLab!', 'success');
    }
  });
};



// ADVISOR SIGNUP
// --------------------------------

export const handleAdvisorSignup = (firstName, lastName, emailAddress, password) => {
  let user = {
        email: emailAddress,
        password: password,
        profile: {
          avatar: defaultAvatar,
          name: {
            first: firstName,
            last: lastName,
          },
          settings: {
            email_Student_Resources: false,
            email_Student_Advisors: false,
            email_Student_Events: false
          }
        },
  };

    Accounts.createUser(user, (error) => {
    if (error) {
      notification.error({ message: error.reason, description: '' });
    } else {
      Meteor.call('utilities.signup.addRoleOnSignup', 'advisor');
      browserHistory.push('/advisor/home');
      notification.success({ message: `Welcome to ${appName}!`, description: '' });
    }
  });

}

// ADVISOR SIGNUP
// --------------------------------

export const handleResourceSignup = (firstName, lastName, emailAddress, password) => {
  let user = {
        email: emailAddress,
        password: password,
        profile: {
          avatar: defaultAvatar,
          name: {
            first: firstName,
            last: lastName,
          },
          settings: {
            email_Student_Resources: false,
            email_Student_Advisors: false,
            email_Student_Events: false
          }
        },
  };

    Accounts.createUser(user, (error) => {
    if (error) {
      notification.error({ message: error.reason, description: '' });
    } else {
      Meteor.call('utilities.signup.addRoleOnSignup', 'resourceOrg');
      browserHistory.push('/resource/home');
      notification.success({ message: `Welcome to ${appName}!`, description: '' });
    }
  });

}


// STUDENT SIGNUP
// --------------------------------

export const handleSignup = (firstName, lastName, graduationYear, email, password) => {

  let profile = {
        graduationYear: graduationYear,
        avatar: defaultAvatar,
        name: {
          first: firstName,
          last: lastName,
        },
        settings: {
          email_Student_Resources: false,
          email_Student_Advisors: false,
          email_Student_Events: false
        }
  };

  let user = { email, password, profile };

  Accounts.createUser(user, (error) => {
    if (error) {
      notification.error({ message: error.reason, description: '' });
    } else {
      Meteor.call('utilities.signup.addRoleOnSignup', 'student');
      browserHistory.push('/student/home');
      notification.success({ message: `Welcome to ${appName}!`, description: '' });
    }
  });

};