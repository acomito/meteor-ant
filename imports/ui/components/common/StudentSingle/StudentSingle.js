import React from 'react';
import 'antd/lib/card/style/css';
import 'antd/lib/row/style/css';
import 'antd/lib/modal/style/css';
import 'antd/lib/tag/style/css';
import 'antd/lib/col/style/css';
import { Card, Row, Col, Modal, Tag } from 'antd';
import { StyleSheet, css } from 'aphrodite';
import { Avatar } from '../Avatar';
/*const student = {
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
	};*/

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


const TagList = ({items, color, label}) => {
	if (!items || items.length < 0 ) {
		return null
	}
	return (
		<div>
			<h3>{label}:</h3>
			{items.map(function(item){
				return <Tag key={item} color={color}>{item}</Tag>
			})}
		</div>
	);
}

const PeopleList = ({items, color}) => {
	if (!items || items.length < 0 ) {
		return null
	}
	return (
		<div>
			{items.map(function(item){
				return <Tag key={item} color={color}>{item}</Tag>
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
			<TagList label={'People'} items={people} color={"#2ecc71"} /> 
			<TagList label={'Advisors'} items={advisors} color={"#2980b9"} /> 
			<TagList label={'Clusters'} items={business.clusters} color={"#34495e"} /> 
		</Card>
	)
}



const StudentCard = ({student}) => {
	const { profile } = student;
	return (
		<Card style={{marginTop: '10px', flex: 1, textAlign: 'center'}}>
			<Row>
				<Avatar
					size={100} 
					src={profile.avatar}
				/>
					<h1>{profile.name.first} {profile.name.last}</h1>
					<span style={{fontSize: 13, fontWeight: 300}}>{profile.major},  {profile.graduationYear}</span>
		     			<TagList label={'Skills'} items={profile.skills} color={"#87d068"} />
		     			<TagList label={'Skills Needed'}  items={profile.needs} color={"#f50"} />
			</Row>
	  	</Card>
	)
}

const StudentSingle = ({student}) => {
	return (
		<div>
			<StudentCard student={student} />
			{/*<BusinessCard />*/}
		</div>
	);
}

export { StudentSingle }


