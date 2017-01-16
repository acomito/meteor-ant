//top-level imports
import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { StyleSheet, css } from 'aphrodite';
//material-ui
// custom components
import { DashboardContainer, AdvisorList, Avatar } from '../../common'
// modules/config
import { colorConfig, appConfig } from '../../../../modules/config'
//forms
import { SocialIcon } from 'react-social-icons';
import 'antd/lib/card/style/css';
import 'antd/lib/row/style/css';
import 'antd/lib/modal/style/css';
import 'antd/lib/tabs/style/css';
import 'antd/lib/icon/style/css';
import 'antd/lib/input/style/css';
import 'antd/lib/form/style/css';
import 'antd/lib/button/style/css';
import 'antd/lib/notification/style/css';
import 'antd/lib/tag/style/css';
import { Card, Row, Modal, Tabs, Icon, Input, Form, Button, notification, Tag } from 'antd';

const FormItem = Form.Item;



const { 
	darkPrimary, 
	primary1Color, 
	primary2Color, 
	accent1Color, 
	primaryText, 
	secondayText
} = colorConfig;


const styles = StyleSheet.create({
	tutorName: {
		color: primary1Color,
		fontSize: 25,
		marginTop: 10,
		marginBottom: 0
	},
	tutorTagline: {
		color: secondayText,
		fontSize: 13,
		marginTop: 3,
		fontWeight: 300,
		marginBottom: 5
	},
	avatarStyles: {
		border: '3px solid #666'
	},
	raisedButtons: {
		width: "300px",
		margin: "30px 10px 10px 10px"
	},
	description: {
		width: '50%',
		margin: 'auto',
		fontWeight: 300,
		fontSize: 13,
	},
	cardStyles: {
      "width": "40%",
      "margin": "auto",
      "marginTop": "40px",
      "padding": "20px",
      textAlign: "center",
    },
    textField: {
      display: "block",
      width: "70%",
      margin: "auto",
      background: "#ffffff",
      backgroundColor: "#ffffff",
      marginBottom: "20px",
    },
    cardActionStyles: {
      margin: "auto"
    },
    labelStyle: {
    	margin: '20px auto'
    }
});

const { labelStyle, avatarStyles, tutorName, tutorTagline } = styles;



const MessageAdvisor = Form.create()(React.createClass({
  getInitialState () {
    return {
      loading: false
    };
  },
  handleSubmit(e) {
    e.preventDefault();

    this.setState({loading: true});
    
    const failure = () => {
      this.setState({loading: false});
    }
    const success = () => {
    	this.setState({loading: false});
    	notification['success']({ message: 'Your message was sent!' });
      this.props.form.resetFields();
    	//browserHistory.push('/student/messages')
    }

    let data = {
    	recipientId: this.props.advisor._id,
    }
    this.props.form.validateFields((err, values) => {
    	if (err) { failure(); return; }
      if (!err) {
        setTimeout(function(){
        	data.title = values.title;
        	data.messageValue = values.messageValue;
        	Meteor.call('Messages.createThreadAndAddMessage', data, function(error, response){
				if (error) { notification['warning']({message: error.reason}); failure(); return; }
				success();
			});
        }, 3000);
      }
     
    });

  },
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} style={{width: 400, margin: 'auto'}}>
        <FormItem>
          {getFieldDecorator('title', {
            rules: [{ required: true, message: 'Please input a title for the message!' }],
          })(
            <Input placeholder="Title" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('messageValue', {
            rules: [{ required: true, message: 'Please input your message!' }],
          })(
            <Input type="textarea" rows={4} placeholder="Message..." />
          )}
        </FormItem>
        <FormItem>
          <Button loading={this.state.loading} type="primary" htmlType="submit" className={css(styles.loginButton)}>
            {!this.state.loading ? 'Send Message' : 'Sending...'}
          </Button>
        </FormItem>
      </Form>
    );
  },
}));

const CustomSocialIcon = ({href, network}) => (
	<SocialIcon href={href} network={network} style={{ height: 20, width: 20 }} />
);

const ScreenContainer = (props) => {
	return (
		<div style={{height: 300, textAlign: 'center'}}>
			{props.children}
		</div>
	);
}

const ScreenOne = ({advisor}) => (
	<ScreenContainer>
		<Avatar className={css(avatarStyles)} src={advisor.profile.image} size={150} />
		<h3 className={css(tutorName)}>{advisor.profile.name.first} {advisor.profile.name.last}</h3>
		<h3 className={css(tutorTagline)}>{advisor.profile.tagline}</h3>
		<CustomSocialIcon href={advisor.profile.facebook} network='facebook' />
		<CustomSocialIcon href={advisor.profile.linkedin} network='linkedin' />
		<CustomSocialIcon href={advisor.profile.twitter} network='twitter' />
		{advisor.profile.availableToAdvise ? <h5 style={{color: '#4CAF50'}}>Available to Advise</h5> : <h5 style={{color: '#F44336'}}>Unavailable to Advise</h5>}
	</ScreenContainer>
);


  const getBio = (advisor) => {
      if (!advisor.profile.description) {
        return (
          <div>
            <p>this advisor does not have a bio yet...</p>
          </div>
        );
      }
      return (
        <div>
          <h3 className={css(labelStyle)}>Bio</h3>
          <h3 className={css(styles.description)}>{advisor.profile.description}</h3>
        </div>
      );
  }
  const getSkills = (advisor) => {
    if (advisor.profile && advisor.profile.skills && advisor.profile.skills.length > 0) {
      return (
          <div>
            <h3 className={css(labelStyle)}>Skills:</h3>
            {advisor.profile.skills.map(skill => <Tag key={skill} color="#f50">{skill}</Tag>)}
          </div>
      );
    }
    return null
  }

const ScreenTwo = ({advisor}) => {
  return (
    <ScreenContainer>
      {getBio(advisor)}
      {getSkills(advisor)}
    </ScreenContainer>
  );
}

const ScreenThree = ({advisor}) => (
	<ScreenContainer>
		<h3>Reach out to {advisor.profile.name.first}</h3>
		<MessageAdvisor advisor={advisor} />
	</ScreenContainer>
);

export class StudentAdvisorsSingle extends Component{ 
	
  constructor(props){
  	super(props);
  	this.state = {
	    selectedIndex: 0,
	  };
  }
  select(index){
  	this.setState({selectedIndex: index});
  }
  render(){
  	const {advisor} = this.props;
  	return (
  		<DashboardContainer pageTitle={`Advisor Profile: ${advisor.profile.name.first}`}>
		  	<div className='row'>
		  		<Card className='box' style={{flex: 1, height: 400}}>
		  			<Tabs>
				      <Tabs.TabPane tab={<span><Icon type="user" />Profile</span>} key="1">
				      	<ScreenOne advisor={advisor} />
				      </Tabs.TabPane>
				      <Tabs.TabPane tab={<span><Icon type="bar-chart" />Skills & History</span>} key="2">
				      	<ScreenTwo advisor={advisor} />
				      </Tabs.TabPane>
				      <Tabs.TabPane tab={<span><Icon type="message" />Contact {advisor.profile.name.first}</span>} key="3">
				      	<ScreenThree advisor={advisor} />
				      </Tabs.TabPane>
				    </Tabs>
		  		</Card>
		  	</div>
		</DashboardContainer>
  	);
  }
}