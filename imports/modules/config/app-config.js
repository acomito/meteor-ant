import { Meteor } from 'meteor/meteor';


const appConfig = {
	//app
	appName: Meteor.settings.public.config.appName,
	//support
	supportEmail: Meteor.settings.public.config.supportEmail,
	supportName: Meteor.settings.public.config.supportName,
	defaultAvatar: 'https://i2.wp.com/s3.amazonaws.com/tmc-site-assets/graphics/gravatar-placeholder.png?ssl=1'
};

export { appConfig };