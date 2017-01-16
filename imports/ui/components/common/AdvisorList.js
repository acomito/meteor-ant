import React from 'react';
//import { Card, CardHeader } from 'material-ui/Card'
import { Link, browserHistory } from 'react-router';
import 'antd/lib/card/style/css';
import 'antd/lib/row/style/css';
import 'antd/lib/modal/style/css';
import 'antd/lib/tabs/style/css';
import 'antd/lib/col/style/css';
import 'antd/lib/tag/style/css';
import 'antd/lib/button/style/css';
import { Card, Row, Modal, Tabs, Col, Tag, Button } from 'antd';
import { StyleSheet, css } from 'aphrodite';
import { appConfig } from '../../../modules/config';
const { defaultAvatar } = appConfig;
const styles = StyleSheet.create({
	viewProfileButton: {
		textTransform: 'uppercase',
		background: "transparent",
		border: '1px solid #108ee9',
		padding: '9px 16px',
		color: '#108ee9',
		':hover': {
			color: '#108ee9',
		}
	}
})


const AvailableTag = ({advisor}) => {
	if (advisor.profile.availableToAdvise) {
		return (
			<Tag color="#E26A6A" style={{margin: 0, marginBottom: 7}}>not available to advise</Tag>
		);
	}
	if (!advisor.profile.availableToAdvise) {
		return (
			<Tag color="#87d068" style={{margin: 0, marginBottom: 7}}>available to advise</Tag>
		);
	}
	
}

const AdvisorTags = ({items}) => {
	if (!items || items.length < 0) {
		return null;
	}
	return (
		<div>
			<h3>Skills:</h3>
			{items.map(item => <Tag key={item} color="#efefef" style={{color: '#888'}}>{item}</Tag>)}
		</div>
	);
	
}

const { viewProfileButton } = styles;


const AdvisorItem = ({reader, advisor}) => {
	if (!advisor || !advisor.profile) {
		return null
	}
	return (
		<Card bodyStyle={{padding: 14}} style={{marginTop: '10px', cursor: 'pointer', height: 170}} onClick={()=> browserHistory.push(`/${reader}/advisors/${advisor._id}`)}>
			<Row type="flex" justify="start" align="middle" style={{cursor: 'pointer', height: '100%'}}>
				<Col span='3'>
					<div style={{overflow: 'hidden', height: 75, width: 75, borderRadius: '50%'}}>
						<img 
							style={{cursor: 'pointer', height: '100%', margin: 'auto'}} 
							src={advisor.profile.image ? advisor.profile.image  : defaultAvatar} 
						/>
					</div>
				</Col>
				<Col span='18'>
					<div style={{width: '100%'}}>
						<h1 style={{cursor: 'pointer', margin: 0, display: 'inline', marginRight: 8}}>{`${advisor.profile.name.first} ${advisor.profile.name.last}`}</h1>
						<AvailableTag advisor={advisor} />
						{advisor && advisor.profile && advisor.profile.tagline && <p style={{margin: 0, marginBottom: 20}}>{advisor.profile.tagline}</p>}
						<AdvisorTags items={advisor.profile.skills} />
					</div>
				</Col>
				<Col span='3'>
					<Button className={css(viewProfileButton)} onClick={()=> browserHistory.push(`/${reader}/advisors/${advisor._id}`)}>
						View Profile
					</Button>
				</Col>
			</Row>
		</Card>
	);

}

const AdvisorList = (props) => {
	const { advisors } = props;
	return (
		<div style={{flex: 1}}>
			{advisors && advisors.length > 0 
				? advisors.map(advisor => <AdvisorItem key={advisor._id} advisor={advisor} reader={props.reader || 'student'} />) 
				: null}	
	  	</div>
	);
}

export { AdvisorList }