import React from 'react';
import { DashboardContainer } from '../../common'

const styles={
	raisedButtons: {
		width: "300px",
		margin: "30px 10px 10px 10px"
	},
}


const StudentCard = () =>  (
	<Card>
		<CardHeader title={'Number of Students'} avatar='http://i.imgur.com/HQ3YU7n.gif' />
		<h1>1,420</h1>
	</Card>
);

const StatCard = ({cardTitle, icon, number}) =>  (
	<div className='col-xs-4'>
		<div className='box'>
			<Card>
				<h3 style={{fontWeight: 300, color: '#666'}}>{cardTitle}</h3>
				<h1>{number}</h1>
			</Card>
		</div>
	</div>
);


export const MasterHome = () => (
  	<DashboardContainer pageTitle={'Master Home'}>
	  	<div className='row middle-xs center-xs'>
	  		<StatCard cardTitle={'Number of Students'} icon={'http://i.imgur.com/HQ3YU7n.gif'} number={'6,121'}/>
	  		<StatCard cardTitle={'Number of Resources'} icon={'http://i.imgur.com/HQ3YU7n.gif'} number={'93'}/>
	  		<StatCard cardTitle={'Number of Events'} icon={'http://i.imgur.com/HQ3YU7n.gif'} number={'81'}/>
	  		<StatCard cardTitle={'Number of Advisors'} icon={'http://i.imgur.com/HQ3YU7n.gif'} number={'227'}/>
	  		<StatCard cardTitle={'Number of Perks'} icon={'http://i.imgur.com/HQ3YU7n.gif'} number={'120'}/>
	  		<StatCard cardTitle={'Number of Businesses'} icon={'http://i.imgur.com/HQ3YU7n.gif'} number={'2,120'}/>
	  	</div>
  	</DashboardContainer>
);

