import { browserHistory } from 'react-router';
import { Accounts } from 'meteor/accounts-base';
import { message } from 'antd';


let token;

const handleReset = (newPassword, token) => {
  const password = newPassword;
  Accounts.resetPassword(token, password, (error) => {
    if (error) {
      message.error(error.reason);
    } else {
      browserHistory.push('/');
      message.success('Password reset!');
    }
  });
};

export const handleResetPassword = (newPassword, repeatNewPassword, token) => {
  token = token;
  handleReset(newPassword, token);
};