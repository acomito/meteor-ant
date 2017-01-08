import React from 'react';
import Griddle from 'griddle-react';
import { browserHistory } from 'react-router';
import { composeWithTracker } from 'react-komposer';
import { Loading } from '../../loading.js';
import { Row } from 'antd';

// META
// ==========================================

const columnMeta = [
  {
    "columnName": "_id",
    "visible": true,
  },
  {
    "columnName": "first",
    "visible": true,
  },
  {
    "columnName": "last",
    "visible": true,
  },
  {
    "columnName": "deleted",
    "visible": true,
  }
];




// TABLE
// ==========================================

class UsersTable extends React.Component{
	constructor(props){
		super(props);
		this.onRowClick = this.onRowClick.bind(this);
	}
	onRowClick(value){
		let id = value.props.data._id;
		browserHistory.push(`/admin/users/${id}`)
	}
	render(){
		const { users } = this.props;
		return (
	       	<Row type="flex" justify="center" align="middle" style={{textAlign: 'center'}}>
	       	<Griddle 
	          results={users} 
	          showFilter={true}
	          style={{fontSize: '10px'}}
	          columns={["_id", "first", "last", "deleted"]}
	          columnMetadata={columnMeta} 
	          showSettings={true}
	          onRowClick={this.onRowClick}
	          useGriddleStyles={true}
	        />
	        </Row>
		);
	}
}


// CONTAINER
// ==========================================


const mapUsers = (users) => {
	let mapped = users.map(item => {
		let user = {
			_id: item._id,
			first: item.profile.name.first,
			last: item.profile.name.last,
			deleted: item.deleted ? item.deleted : false
		}
		return user
	});
	return mapped
}

const composer = (props, onData) => {
  const usersSub = Meteor.subscribe('admin.allUsers');
  if (usersSub.ready()) {
  	let query = { roles: { $nin: ['admin']} }
    const usersQuery = Meteor.users.find(query).fetch();
    const users = mapUsers(usersQuery)
    onData(null, { users });
  }
};

// FINAL EXPORT
// ==========================================

export default composeWithTracker(composer, Loading)(UsersTable);
