import React from 'react';
import 'antd/lib/card/style/css';
import 'antd/lib/row/style/css';
import 'antd/lib/modal/style/css';
import 'antd/lib/tag/style/css';
import 'antd/lib/col/style/css';
import { Card, Row, Col, Modal, Tag } from 'antd';
import { StyleSheet, css } from 'aphrodite';

const student = {
		id: 1,
		roles: ['student'],
		email: [{address: 'Email@gmail.com', verified: false}],
		profile: {
			name: {
				first: 'Anthony',
				last: 'Comito'
			},
			avatar: "https://cdn2.iconfinder.com/data/icons/website-icons/512/User_Avatar-512.png",
			graduationYear: 2020,
			major: 'Business',
			skills: ['marketing'],
			needs: ['accounting'],
			status: 'looking', //founder, cofounder, looking for opportuntiies
			businessId: 232332
		}
	};

const business = {
		id: 1,
		title: 'Reesio',
		description: 'faskfjsalkfjsaf jlfksja flksa jflska fjasklf aslkf saf',
		avatar: "https://cdn2.iconfinder.com/data/icons/website-icons/512/User_Avatar-512.png",
		clusters: ['marketing', 'design', 'manufacturing wood frogs'],
		major: 'Business',
		skills: ['marketing'],
		needs: ['accounting'],
		status: 'looking', //founder, cofounder, looking for opportuntiies
		businessId: 232332
	};

const advisors = [
	'Ted Bundy',
	'Carlton Fisk',
	'Larry Bird'
]

const people = [
	'Ted Bundy',
	'Carlton Fisk',
	'Larry Bird'
]


const TagList = ({items, color}) => {
	return (
		<div>
			{items.map(function(item){
				return <Tag color={color}>{item}</Tag>
			})}
		</div>
	);
}

const PeopleList = ({items, color}) => {
	return (
		<div>
			{items.map(function(item){
				return <Tag color={color}>{item}</Tag>
			})}
		</div>
	);
}


const BusinessCard = () => {
	return (
		<Card style={{marginTop: '10px', flex: 1, textAlign: 'center'}}>
			<img style={{height: 140}} src="http://cdn.designcrowd.com.s3.amazonaws.com/blog/50-top-startup-logos-2013/17-top-50-startup-logos-2013.png" />
			<h1>{business.title}</h1>
			<p>{business.description}</p>
			<hr style={{width: 100, margin: '40px auto'}}/>
			<h3>People:</h3>
			<PeopleList items={people} color={"#2ecc71"} /> 
			<h3>Advisors:</h3>
			<PeopleList items={advisors} color={"#2980b9"} /> 
			<h3>Clusters:</h3>
			<TagList items={business.clusters} color={"#34495e"} /> 
		</Card>
	)
}



const StudentCard = () => {
	const { profile } = student;
	return (
		<Card style={{marginTop: '10px', flex: 1, textAlign: 'center'}}>
			<Row>
					<img style={{height: 60, width: 60}} src="https://cdn2.iconfinder.com/data/icons/website-icons/512/User_Avatar-512.png" />
					<h1>{profile.name.first} {profile.name.last}</h1>
					<span style={{fontSize: 13, fontWeight: 300}}>{profile.major} Major,  {profile.graduationYear}</span>
		     			<h3>Skills:</h3>
		     			<TagList items={profile.skills} color={"#87d068"} />
		     			<h3>Skills Needed:</h3>
		     			<TagList items={profile.needs} color={"#f50"} />
			</Row>
	  	</Card>
	)
}

const StudentSingle = (props) => {
	return (
		<div>
			<StudentCard />
			{/*<BusinessCard />*/}
		</div>
	);
}

export { StudentSingle }


