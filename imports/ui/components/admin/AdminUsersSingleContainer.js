import React from 'react';
import { browserHistory } from 'react-router';
import { DashboardContainer } from '../../common';
import UsersTable from './UsersTable'
import { composeWithTracker } from 'react-komposer';
import { Loading } from '../../loading.js';
import { Row, Col, Card, Button, Popconfirm, message } from 'antd';
import { LabelAndValue } from '../../common';



class AdminUserControls extends React.Component {
	constructor(props){
		super(props);
		this.confirmDelete = this.confirmDelete.bind(this);
	}
	confirmDelete(){
		const { user } = this.props;
		Meteor.call('admin.deleteUser', user._id, function(error, response){
			if (error) { message.error(error.reason); return; };
			message.success('user deleted!');
			browserHistory.push('/admin/users');
		})
	}
	render(){
		return (
			<div>
				<Popconfirm title="Are you sure delete this user?" onConfirm={this.confirmDelete} okText="Yes" cancelText="No">
				    <Button type='primary'>Delete User</Button>
				  </Popconfirm>
			</div>
		);
	}
}


const Profile = ({user}) => {
	return (
		<Row gutter={10} type="flex" justify="center" align="top" style={{marginTop: 30}}>
			<Col span='12'>
				<Card style={{height: 300}}>
					<LabelAndValue label={'Name'} value={`${user.profile.name.first} ${user.profile.name.last}`} />
					<LabelAndValue label={'email'} value={user.emails[0].address} />
					<LabelAndValue label={'userID'} value={user._id} />
				</Card>
			</Col>
			<Col span='12'>
				<Card style={{height: 300}}>
					<AdminUserControls user={user} />
				</Card>
			</Col>
		</Row>
	);
}


export const AdminUsersSingleContainer = ({user}) => (
  	<DashboardContainer pageTitle={`USER PROFILE`}>
  		<Profile user={user} />
  	</DashboardContainer>
);




// CONTAINER
// ==========================================


const mapUsers = (users) => {
	let mapped = users.map(item => {
		let user = {
			_id: item._id,
			first: item.profile.name.first,
			last: item.profile.name.last,
		}
		return user
	});
	return mapped
}

const composer = (props, onData) => {
  const usersSub = Meteor.subscribe('admin.allUsers');
  if (usersSub.ready()) {
    const user = Meteor.users.findOne({_id: props.id});
    onData(null, { user });
  }
};

// FINAL EXPORT
// ==========================================

export default composeWithTracker(composer, Loading)(AdminUsersSingleContainer);