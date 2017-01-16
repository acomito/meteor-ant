import React from 'react';
import { DashboardContainer } from '../../common'
import { Card, Button, message, Row, Col } from 'antd';
import { onboardConfig } from '../../../../modules/config'
import Joyride from 'react-joyride';

let perksToSeed = [
        {
          organizationTitle: 'QuickBooks',
          contentLink: 'https://www.google.com',
          code: '#5555555',
          image: 'https://pbs.twimg.com/profile_images/760157914686296064/GsQy4dCZ.jpg',
          description: "QuickBooks is Intuit Inc's set of software solutions designed to manage payroll, inventory, sales and other needs of a small business. The software's features include marketing tools, merchant services, product and supplies, training solutions.",
          title: '20% Quickbooks',
          perkType: 'coupon',
        },
        {
          organizationTitle: 'SalesForce',
          contentLink: 'https://www.google.com',
          code: '#LOLOLOL',
          image: 'https://login.salesforce.com/img/logo198.png',
          description: 'salesforce.com, inc. provides enterprise cloud computing applications. ',
          title: 'Free for 2 Months',
          perkType: 'coupon',
        },
        {
          organizationTitle: 'UserTesting',
          contentLink: 'https://www.google.com',
          code: '#LOLOLOL',
          image: 'https://s3.amazonaws.com/awsmp-logos/User_Testing.png',
          description: 'UserTesting is the fastest way to get feedback',
          title: 'Free for web or mobile usability testing',
          perkType: 'perkType',
        },
        {
          organizationTitle: 'SquareSpace',
          contentLink: 'https://www.google.com',
          code: '#LOLOLOL',
          image: 'https://static1.squarespace.com/static/5134cbefe4b0c6fb04df8065/t/524996e8e4b05bfd3a9b0615/1380554472440/squarespace-logo-horizontal-black.jpg',
          description: 'UserTesting is the fastest way to get feedback',
          title: '10% of Your Next Website',
          perkType: 'perkType',
        },
        {
          organizationTitle: 'ResumeMonk',
          contentLink: 'https://www.google.com',
          code: '#LOLOLOL',
          image: 'https://www.shareasale.com/images/resumonk-logo-light.jpg',
          description: 'UserTesting is the fastest way to get feedback',
          title: '30% of the Resumonk Premium Plan',
          perkType: 'perkType',
        },
        {
          organizationTitle: 'BaseCamp',
          contentLink: 'https://www.google.com',
          code: '#LOLOLOL',
          image: 'https://help.basecamp.com/images/logo-bc.png',
          description: 'UserTesting is the fastest way to get feedback',
          title: 'BaseCamp is Free for Students!',
          perkType: 'perkType',
        }
    ] 


const PerkCard = ({item}) => (
	  	<Card style={{textAlign: 'center', marginTop: 10}}>
        <div style={{minHeight: 100}}>
		  	 <img src={item.image} style={{maxHeight: 100, maxWidth: 270}} />
        </div>
		  	<h2>{item.title}</h2>
		  	<Button 
          style={{cursor: 'pointer', backgroundColor: '#e67e22', textTransform: 'uppercase', border: 'none', marginTop: 30, padding: '10px 23px', color: '#fff'}} 
          onClick={()=>message.info('Sorry this is just a demo!')}>
            Learn More
          </Button>
	  	</Card>
);

class PerkList extends React.Component {
  constructor(props){
    super(props)
    this.onboardCallback = this.onboardCallback.bind(this);
  }
  componentDidMount() {
    const { onboarding } = this.props;
    if (!onboarding.student_perks || onboarding.student_perks === undefined ){
      this.refs.joyride.start();
    }
  }
  onboardCallback(value){
    if (value.type === 'finished') {
      console.log(value.type)
      Meteor.call('onboarding.toggleOnboarding', 'student_perks', function(error, response){
        if (error) { console.log(error); return; }
      });
    }
    
  }
  render(){
    const { onboarding } = this.props;

    let data = [{
          title: onboardConfig.perks_title,
          text: onboardConfig.perks_description,
          selector: '.first-step',
          position: 'top',
          type: 'hover',
          style: onboardConfig.onboardStyle
        }
      ];
    return (
      <div>
        <Joyride
            ref='joyride'
            debug={false}
            steps={data}
            type="single"
            callback={this.onboardCallback}
        />
        
        <Row gutter={15} type="flex" justify="center" align="middle" >
          {perksToSeed && perksToSeed.length > 0 ? perksToSeed.map(item => {
            return (
              <Col key={perksToSeed.image} span={8}>
                <PerkCard  item={item} />
              </Col>
            );
          }) : null}
        </Row>
      </div>
    );
  }
}

export const StudentPerks = ({onboarding}) => (
  	<DashboardContainer pageTitle={'Student Perks'}>
  		<PerkList onboarding={onboarding} />
  	</DashboardContainer>
);
