import React from 'react';
import { Row } from 'antd'


const DashboardContainer = (props) => (
	<Row style={{marginRight: "100px"}}>
		<h2>{props.pageTitle}</h2> 
		{props.children}	
  	</Row>
);

export { DashboardContainer }