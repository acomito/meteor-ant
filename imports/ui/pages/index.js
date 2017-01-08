import React from 'react';
import { Button, Card, Row, Col } from 'antd';
import { appConfig } from '../../modules/config';

const { appName } = appConfig;

const Jumbotron = () => (
  	<Row style={{height: 150, textAlign: 'center'}} type="flex" justify="center" align="middle" >
  		<div>
	  		<h2>{ appName }</h2>
	    	<p>An Ant Design framework starting point for Meteor/React applications.</p>
	    	<Button href='https://github.com/acomito/meteor-ant' type="primary">Space Bug Documentation</Button>
	    	</div>
  	</Row>
);



export const Index = () => (
  	<div>
  		<Jumbotron />
  	</div>
);


