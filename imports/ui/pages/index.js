import React from 'react';
import 'antd/lib/button/style/css';
import 'antd/lib/row/style/css';
import 'antd/lib/card/style/css';
import 'antd/lib/col/style/css';
import { Button, Card, Row, Col } from 'antd';



const Jumbotron = () => (
  	<Row style={{height: 150, textAlign: 'center'}} type="flex" justify="center" align="middle" >
  		<div>
	  		<h2>Base AntD</h2>
	    	<p>A AntD starting point for Meteor/React applications.</p>
	    	<Button type="primary">Material-UI Base Documentation</Button>
	    	<Button href="https://themeteorchef.com/base"  type="ghost">Original Base Documentation</Button>
	    	<p style={ { fontSize: '14px', color: '#aaa', marginTop: "20px" } }>forked from themeteorchef <a href="https://themeteorchef.com/base">base</a> at v4.5.0</p>
		</div>
  	</Row>
);



export const Index = () => (
  	<div>
  		<Jumbotron />
  	</div>
);


