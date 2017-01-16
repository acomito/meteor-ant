import React from 'react';
import { DashboardContainer } from '../../common'
import { Link } from 'react-router'; 
import { StyleSheet, css } from 'aphrodite'
import { colorConfig } from '../../../../modules/config'
import { timeAgo } from '../../../../modules/helpers'
//icons

import { Card, Icon, Row, Col, Timeline, Tag } from 'antd';

//types: 
//businessesAdded: fires when a new businesses is added
//advisorAdded,: fires when a new advisor is added
//advisorConnected,: fires when a new advisor accepts to advise a student business
//eventAdded: fires when a new event is added
//resourceOrgAdded: fire when a new resourceOrg is added
//resourceItemAdded, 
//masterNewsItem
//perkAdded
//adminNews -> for when new features are added

const { primary1Color, accent1Color } = colorConfig;

const newsToSeed = [
	{
		id: 1,
		title: 'New Businesses Added!',
		image: 'what do put here?',
		tags: ['workshop', 'finance'],
		stage: ['early'],
		help: ['businessPlanning'],
		date: '10 hours ago...',
		linkToNews: 'link to news?', // link to business profile
		businessId: '',
		advisorId: '',
		eventId: '',
		studentId: '',
		resourceOrgId: '',
		resourceItemid: '',
		newsType: 'businessesAdded'
	},
	{
		id: 2,
		title: 'New Advisor Available!',
		image: 'what do put here?',
		tags: ['workshop', 'finance'],
		stage: ['early'],
		help: ['businessPlanning'],
		date: '10 hours ago...',
		linkToNews: 'link to news?', // link to advisor profile
		businessId: '',
		advisorId: '',
		eventId: '',
		studentId: '',
		resourceOrgId: '',
		resourceItemid: '',
		newsType: 'advisorAdded'
	},
	{
		id: 3,
		title: 'ABC advisor connected with ABC Company!',
		image: 'what do put here?',
		tags: ['workshop', 'finance'],
		stage: ['early'],
		help: ['businessPlanning'],
		date: '10 hours ago...',
		linkToNews: 'link to news?', // link to advisor profile or business? or both?
		businessId: '',
		advisorId: '',
		eventId: '',
		studentId: '',
		resourceOrgId: '',
		resourceItemid: '',
		newsType: 'advisorConnected'
	},
	{
		id: 4,
		title: 'New Event!',
		tags: ['workshop', 'finance'],
		stage: ['early'],
		help: ['businessPlanning'],
		image: 'what do put here?',
		date: '10 hours ago...',
		linkToNews: 'link to news?', // link to advisor profile or business? or both?
		businessId: '',
		advisorId: '',
		eventId: '',
		studentId: '',
		resourceOrgId: '',
		resourceItemid: '',
		newsType: 'eventAdded'
	},
	{
		id: 5,
		title: 'New Event!',
		tags: ['workshop', 'finance'],
		stage: ['early'],
		help: ['businessPlanning'],
		image: 'what do put here?',
		date: '10 hours ago...',
		linkToNews: 'link to news?', // link to advisor profile or business? or both?
		businessId: '',
		advisorId: '',
		eventId: '',
		studentId: '',
		resourceOrgId: '',
		resourceItemid: '',
		newsType: 'resourceOrgAdded'
	},
]

const styles = StyleSheet.create({
	cardTitle: {
		fontWeight: 300,
		fontSize: 15,
		margin: 0
	},
	linkStyles: {
		cursor: 'pointer',
	}
});

const { cardTitle, linkStyles } = styles;

const BusinessAddedTitle = ({item}) => {
	return (
		<div>
			<h3 className={css(cardTitle)}>
				<Link className={css(linkStyles)}> Clayton Fox </Link>
				added a new 
				<Link className={css(linkStyles)}> Business </Link>
			</h3>
		</div>
	);
}

const EventAdded = ({item}) => {
	return (
		<div>
			<h3 className={css(cardTitle)}>
				<Link className={css(linkStyles)}> Local SBDC </Link>
				added a new 
				<Link className={css(linkStyles)}> Event </Link>
			</h3>
		</div>
	);
}

const AdvisorConnected = ({item}) => {
	return (
		<div>
			<h3 className={css(cardTitle)}>
				<Link className={css(linkStyles)}> Adivosr Name </Link>
				is now advising
				<Link className={css(linkStyles)}> Business Name </Link>
			</h3>
		</div>
	);
}

const AdvisorAdded = ({item}) => {
	return (
		<div>
			<h3 className={css(cardTitle)}>
				<Link className={css(linkStyles)}> Adivosr Name </Link>
				just joined GrowthLab!
			</h3>
		</div>
	);
}

const ResourceOrgAdded = ({item}) => {
	const { org } = item;
	return (
		<div>
			<h3 className={css(cardTitle)}>
				<Link to={`/student/organizations/${org._id}`} className={css(linkStyles)}>{org.title} </Link>
				just added their organization as a resource!
			</h3>
			<TimeAgo item={item} />
			<div>
				{/*org.tags.map(function(tag){
					return <Tag key={tag} color='#efefef' style={{color: '#888'}}>{tag}</Tag>
				})*/}
			</div>
		</div>
	);
}



const SignupComponent = ({item, type, label}) => {
	const { user } = item;
	return (
		<div>
			<h3 className={css(cardTitle)}>
				<Link to={`/student/${type}/${user._id}`} className={css(linkStyles)}>{user.profile.name.first} {user.profile.name.last.charAt(0)}. </Link>
				just created their {label} account!
			</h3>
			<TimeAgo item={item} />
		</div>
	);
}

const ResourceItemAdded = ({item}) => {
	return (
		<div>
			<h3 className={css(cardTitle)}>
				<Link to={`/student/organizations/${item.org._id}`} className={css(linkStyles)}>{item.org.title} </Link>
				just added
				<Link className={css(linkStyles)}> {item.resource.title}</Link> 
			</h3>
			<TimeAgo item={item} />
		</div>
	);
}

const getTitle = (item) => {
	switch(item.newsType) {
		case 'businessesAdded':
			return <BusinessAddedTitle item={item} />
		case 'eventAdded':
			return <EventAdded item={item} />
		case 'advisorConnected':
			return <AdvisorConnected item={item} />
		case 'advisorSignup':
			return <SignupComponent item={item} type={'advisors'} label={'advisor'} />
		case 'studentSignup':
			return <SignupComponent item={item} type={'students'} label={'student'} />
		case 'resourceOrgAdded':
			return <ResourceOrgAdded item={item} />
		case 'resourceItemAdded':
			return <ResourceItemAdded item={item} />
	}
}

 const getIcon = (item) => {
 	let fontSize = 25;
 	switch(item.newsType) {
		case 'businessesAdded':
			return <Business color={primary1Color} />
		case 'eventAdded':
			return <Icon type="calendar" style={{ fontSize: fontSize }} color={primary1Color} /> //<ActionDateRange color={primary1Color} />
		case 'advisorSignup':
			return <Icon type="team" style={{ fontSize: fontSize }} color={primary1Color} />;
		case 'studentSignup':
			return <Icon type="user" style={{ fontSize: fontSize }} color={primary1Color} />;
		case 'advisorAdded':
			return <Face color={primary1Color} />
		case 'resourceOrgAdded':
			return <Icon type="environment-o" style={{ fontSize: fontSize }} color={primary1Color} />;
		case 'resourceItemAdded':
			return <Icon type="rocket" style={{ fontSize: fontSize }} color={primary1Color} />;
	}
 }

const TimeAgo = ({item}) => (
	<span style={{fontSize: 9, fontWeight: 300, color: '#bdc3c7'}}>
		<Icon style={{marginRight: 4}} type="clock-circle-o" />
		{timeAgo(item.createdAt)}
	</span>
);

const NewsCard = ({item}) => (
  	<Card className='box' style={{marginTop: 10, width: '100%', borderRadius: '3px'}}>
  		<CardHeader subtitle={<TimeAgo item={item} />} avatar={getIcon(item)} title={getTitle(item)} />
  	</Card>
);



const TimelineItem = ({item}) => {
	return (
		<Timeline.Item
			dot={getIcon(item)}
			color={primary1Color}
			style={{minHeight: 85, textAlign: 'left'}}
		>
			{getTitle(item)}
			
		</Timeline.Item>
	);
}

const NewsFeed = ({news}) => (
<div className="row middle-xs center-xs" style={{padding: "50px 0px", flex: 1 }}>
	<Timeline>
		{news && news.length > 0 ? news.map(item => {
			return <TimelineItem key={item._id} item={item} />
		}) : null}
		<Timeline.Item/>
	</Timeline>
</div>
);

export const StudentNews = ({news}) => (
  	<DashboardContainer pageTitle={'Home Newsfeed'}>
  			{/*<h1 style={{textAlign: 'center'}}>Newsfeed</h1>*/}
	  		<NewsFeed news={news}/>
  	</DashboardContainer>
);

