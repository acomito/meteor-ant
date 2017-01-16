import { appConfig } from './app-config';

const { appName } = appConfig;

export const onboardConfig = {
	//signup page
	signupPage_demo_title: `Take ${appName} for a Test Drive!`,
	signupPage_demo_text: "Simply make up a name, a graduation year and an email. Then explore your student dashboard at an example University (the University of Startup Now). Enjoy the demo!",
	organizations_title: 'Resource Organizations for Students',
	organizations_text: 'There are a lot of departments at your university that can help. There are also organizations in the community, non-profits, as well as local and state governments who have helpful programs too. Find them all here. ',
	perks_title: 'Student Perks',
	perks_description: 'Starting or running a business is expensive. So we compiled exclusive discounts for StartupNow students. Save money and time with these student perks.',
	//OVERALL
	position: 'top',
	type: 'hover',
	onboardStyle: {
            mainColor: '#75ba50',
            beacon: {
              inner: '#75ba50',
              outer: '#75ba50',
            },
            button: {
              background: '#75ba50',
              color: '#fff',
              fontWeight: 300,
              textTransform: 'uppercase',
              padding: '8px 16px'
            },
          }

}