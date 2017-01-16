import React from 'react';
import { DashboardContainer, AdvisorList } from '../../common'


const styles={
	raisedButtons: {
		width: "300px",
		margin: "30px 10px 10px 10px"
	},
}

export const StudentAdvisors = ({advisors}) => (
  	<DashboardContainer pageTitle={'Advisors'}>
	  	<div className='row'>
	  		<AdvisorList advisors={advisors} reader={'student'} />
	  	</div>
  	</DashboardContainer>
);