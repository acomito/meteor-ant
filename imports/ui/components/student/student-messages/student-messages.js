import React from 'react';
import { Link } from 'react-router';
import { DashboardContainer, AdvisorList } from '../../common'


const styles = {
	raisedButtons: {
		width: "300px",
		margin: "30px 10px 10px 10px"
	},
}


const MessageItem = ({item}) => (
	<Link to={`/student/messages/${item._id}`}>
		<Card>
			<CardTitle title={item.title} />
		</Card>
	</Link>
);

export const StudentMessages = ({ threads }) => (
  	<DashboardContainer pageTitle={'Messages'}>
	  	<div className='row' style={{flex: 1}}>
	  		{threads.map(function(item){
	  			return <MessageItem key={item._id} item={item} />
	  		})}
	  	</div>
  	</DashboardContainer>
);