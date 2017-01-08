import { Meteor } from 'meteor/meteor';
import ReactHTMLEmail from 'react-html-email';



// UNCOMMENT THE BELOW AND ADD YOUR MAILGUN API KEY TO THE SETTINSG FILE
// ====================================

/*Meteor.startup( function() {
    process.env.MAIL_URL = Meteor.settings.mailgun;


    //setup config and some other stuff from react-html-email. see: https://github.com/chromakode/react-html-email
    ReactHTMLEmail.injectReactEmailAttributes()
	ReactHTMLEmail.configStyleValidator({
	  // When strict, incompatible style properties will result in an error. 
	  strict: true,
	 
	  // Whether to warn when compatibility notes for a style property exist. 
	  warn: true,
	 
	  // Platforms to consider for compatibility checks. 
	  platforms: [
	    'gmail',
	    'gmail-android',
	    'apple-mail',
	    'apple-ios',
	    'yahoo-mail',
	  ],
	});

});*/