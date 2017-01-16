import React from 'react';
import { DashboardContainer, AdvisorList } from '../../common'
import { formatChatTime, timeAgo } from '../../../../modules/helpers'
import { appConfig } from '../../../../modules/config'
import { StyleSheet, css } from 'aphrodite';

const { defaultAvatar } = appConfig;

const styles = StyleSheet.create({
	cardTitle: {
		margin: 0,
		display: 'inline',
		fontWeight: 400,
		marginBottom: 8
	},
	messageTime: {
		marginLeft: 5,
		display: 'inline',
		color: '#666',
		fontSize: 10,
		fontWeight: 300
	},
	raisedButtons: {
		width: "300px",
		margin: "30px 10px 10px 10px"
	},
});

const { 
	cardTitle, 
	messageTime 
} = styles;

const MessageTitle = ({item}) => {
	return (
		<div>
			<h3 className={css(cardTitle)}>{item.user.profile.name.first} {item.user.profile.name.last}</h3>
			<span className={css(messageTime)}>{timeAgo(item.createdAt)}</span>
		</div>
	);
}

const MessageItem = ({item}) => (
	<Card>
		<CardHeader
			title={<MessageTitle item={item} />}
			avatar={item.user && item.user.profile && item.user.profile.avatar ? item.user.profile.avatar : defaultAvatar } 
		/>
		<CardText>
			{item.messageValue}
		</CardText>
		<CardActions>
			<FlatButton label='Reply' />
		</CardActions>
	</Card>
);

const MessageList = ({messages}) => (
	<div className='box' style={{flex: 1}}>
		{ messages.map(item => <MessageItem key={item._id} item={item} />) }
	</div>
);



export const StudentThread = ({ messages, participants }) => (
  	<DashboardContainer pageTitle={`Conversation between ${participants[0]} and ${participants[1]}`}>
	  	<div className='row'>
	  		{messages && messages.length > 0 ? <MessageList messages={messages} /> : null}
	  	</div>
  	</DashboardContainer>
);