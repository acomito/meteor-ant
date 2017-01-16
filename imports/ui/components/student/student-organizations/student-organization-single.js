//top-level imports
import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { StyleSheet, css } from 'aphrodite';
//material-ui
// custom components
import { DashboardContainer, AdvisorList } from '../../common'
// modules/config
import { colorConfig, appConfig } from '../../../../modules/config'
//forms
import { SocialIcon } from 'react-social-icons';
import { Card, Row, Modal, Tabs, Icon, Input, Form, Button, notification, Tag } from 'antd';

const FormItem = Form.Item;
import { getIcon, getOrgIcon } from '../../../../modules/helpers'




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



const InfoArea = ({title, value}) => {
  return (
    <div style={{minHeight: 50, marginTop: 30}}>
      <h2>{title}:</h2>
      <p>{value}</p>
    </div>
  );
}

const OrgTags = ({ color, fontColor,  items }) => {
  if (items && items.length > 0) {
      return (
        <div style={{marginTop: 5}}>
          {items.map(item => <Tag color={color} style={{color: fontColor || '#fff'}}>{item}</Tag>)}
        </div>
      );
  }
  //else
  return null;
}

const OrganizationProfile = ({item}) => {
  return (
    <Card style={{textAlign: 'center'}}>
      <div>
        {getOrgIcon(item, 90)}
      </div>
      <div style={{width: '70%', margin: 'auto'}}>
        <InfoArea title="Description" value={item.description} />
        <InfoArea title="Location" value={item.location} />
        <InfoArea title="Tags" value={<OrgTags items={item.tags} color={'#efefef'} fontColor={'#888'} />} />
      </div>
    </Card>
  );
}

export class StudentOrganizationSingle extends Component{ 
	
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
    const { org } = this.props;
  	return (
  		<DashboardContainer pageTitle={org.title}>
        <OrganizationProfile item={org} />
		  </DashboardContainer>
  	);
  }
}