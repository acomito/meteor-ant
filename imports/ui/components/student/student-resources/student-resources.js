import React from 'react';
import { Link } from 'react-router';

import { DashboardContainer } from '../../common'


import { Form, Row, Col, Icon, Input, Card, Button, Checkbox } from 'antd';

const resourceItemsSeed = [
	{
		_id: 1,
		title: 'Business Loans',
		resourceItemType: 'financing', // financing, service, competition, incentive,
		resourceOrgTitle: 'Local CDFI',
	},
	{
		_id: 2,
		title: 'Free Legal Counsel',
		resourceItemType: 'service', // financing, service, competition, incentive,
		resourceOrgTitle: 'University Law Department',
	},
	{
		_id: 3,
		title: '2017 Business Plan Competition',
		resourceItemType: 'competition', // financing, service, competition, incentive,
		resourceOrgTitle: 'University Entreprenuership Center',
	},
	{
		_id: 4,
		title: 'Economic Incentive',
		resourceItemType: 'incentive', // financing, service, competition, incentive,
		resourceOrgTitle: 'State Department of Economic Development',
	},
	{
		_id: 5,
		title: 'SMB Loans',
		resourceItemType: 'financing', // financing, service, competition, incentive,
		resourceOrgTitle: 'Local CDFI',
	},
	{
		_id: 6,
		title: 'Free Business Advisory Service',
		resourceItemType: 'service', // financing, service, competition, incentive,
		resourceOrgTitle: 'Local SBDC',
	},
	{
		_id: 7,
		title: 'StartupNow Competition',
		resourceItemType: 'competition', // financing, service, competition, incentive,
		resourceOrgTitle: 'Local Incubator',
	},
	{
		_id: 8,
		title: 'Early-stage Startup Investment',
		resourceItemType: 'financing', // financing, service, competition, incentive,
		resourceOrgTitle: 'Local Angel Investment Group',
	},
	{
		_id: 9,
		title: 'Local SMB Incentive',
		resourceItemType: 'incentive', // financing, service, competition, incentive,
		resourceOrgTitle: 'City Department of Economic Development',
	},
	{
		_id: 10,
		title: 'Free Business Logos',
		resourceItemType: 'service', // financing, service, competition, incentive,
		resourceOrgTitle: 'University Department of the Arts',
	},
	{
		_id: 11,
		title: 'Free Website Development',
		resourceItemType: 'service', // financing, service, competition, incentive,
		resourceOrgTitle: 'University Department of Technology & Engineering',
	},
	
];


 const getIcon = (item) => {
 	switch(item.resourceItemType) {
		case 'financing':
			return <Icon type="line-chart" style={{ fontSize: '28px' }} />
		case 'competition':
			return <Icon type="bulb" style={{ fontSize: '28px' }} /> //<ActionDateRange color={primary1Color} />
		case 'incentive':
			return <Icon type="heart-o" style={{ fontSize: '28px' }} />
		case 'service':
			return <Icon type="solution" style={{ fontSize: '28px' }} /> 
		case 'resourceOrgAdded':
			return <AccountBalance color={primary1Color} />
	}
 }

const ResourceItemCard = ({item}) => {
	return (
		<Card style={{marginTop: 10}}>
			<Row>
				<Col span='2'>
					{getIcon(item)}
				</Col>
				<Col span='22'>
					<h3 style={{textAlign: 'left'}}>{item.title}</h3>
					<p style={{textAlign: 'left'}}>
						<span style={{color: '#666'}}>from </span> 
						<Link style={{color: 'organge'}}>{item.resourceOrgTitle}</Link>
					</p>
				</Col>
			</Row>
		</Card>
	);
}

const ResourceItems = () => {
	return (
		<div style={{marginTop: 30, paddingBottom: 100}}>
			{resourceItemsSeed.map(function(item){
				return <ResourceItemCard key={item._id} item={item} />
			})}
		</div>
	);
}

export const StudentResources = () => (
  	<DashboardContainer pageTitle={'Student Resources'}>
  		<ResourceItems />
  	</DashboardContainer>
);