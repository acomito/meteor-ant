import { Accounts } from 'meteor/accounts-base';

const name = Meteor.settings.public.config.appName;
const email = `<${Meteor.settings.public.config.supportEmail}>`;
const from = `${Meteor.settings.public.config.supportName} ${Meteor.settings.public.config.supportEmail}`;
const emailTemplates = Accounts.emailTemplates;

emailTemplates.siteName = name;
emailTemplates.from = from;

emailTemplates.resetPassword = {
  subject() {
    return `[${name}] Reset Your Password`;
  },
  text(user, url) {
    const userEmail = user.emails[0].address;
    const urlWithoutHash = url.replace('#/', '');

    return `A password reset has been requested for the account related to this
    address (${userEmail}). To reset the password, visit the following link:
    \n\n${urlWithoutHash}\n\n If you did not request this reset, please ignore
    this email. If you feel something is wrong, please contact our support team:
    ${email}.`;
  },
};