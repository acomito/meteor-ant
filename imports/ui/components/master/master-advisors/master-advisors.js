import React from 'react';
import { DashboardContainer, AdvisorList } from '../../common'


const styles={
	raisedButtons: {
		width: "300px",
		margin: "30px 10px 10px 10px"
	},
}

export const MasterAdvisors = ({advisors}) => (
  	<DashboardContainer pageTitle={'Advisors'}>
	  	<div className='row'>
	  		<AdvisorList advisors={advisors} />
	  	</div>
  	</DashboardContainer>
);