import React from 'react';
import { browserHistory } from 'react-router';
import 'antd/lib/card/style/css';
import 'antd/lib/row/style/css';
import 'antd/lib/modal/style/css';
import 'antd/lib/tag/style/css';
import 'antd/lib/col/style/css';
import { Card, Row, Col, Modal, Tag } from 'antd';
import { StyleSheet, css } from 'aphrodite';
import { studentsSeed } from '../../../../modules/helpers'
import { appConfig } from '../../../../modules/config'
import { Avatar } from '../Avatar'

const { defaultAvatar } = appConfig;



const TagList = ({items, color, label}) => {
	if (!items || items.length < 0 ) {
		return null
	}
	return (
		<div>
			<h3>{label}:</h3>
			{items && items.length > 0 ? items.map( (item) => <Tag key={item} color={color}>{item}</Tag> ) : null}
		</div>
	);
}

const goToPage = (student) => {
	browserHistory.push(`/student/students/${student._id}`)
}

const StudentItem = ({student}) => {
	const { profile } = student;
	return (
		<Card style={{marginTop: '10px'}} onClick={()=> goToPage(student)}>
			<Row>
				<Col span='2'>
					<Avatar
						size={60} 
						src={student && student.profile && student.profile.avatar ? student.profile.avatar : defaultAvatar} 
					/>
				</Col>
				<Col span='22'>
					<h1>{profile.name.first} {profile.name.last} 
						<span style={{fontSize: 13, fontWeight: 300}}>
							{profile.major},  {profile.graduationYear}
						</span>
					</h1>
		     			<TagList label={'Skills:'} items={profile.skills} color={"#87d068"}  />
		     			<TagList label={'Skills Needed:'} items={profile.needs} color={"#f50"}  />
				</Col>
			</Row>
	  	</Card>
	)
}

export const StudentsList = (props) => {
	const { students } = props;
	console.log(students)
	return (
		<div style={{flex: 1}}>
			{students && students.length > 0 
				? students.map(student=> <StudentItem key={student._id} student={student} />) 
				: null}	
	  	</div>
	);
}

