import React from 'react';
import { DashboardContainer, StudentsList } from '../../common'


const styles={
	raisedButtons: {
		width: "300px",
		margin: "30px 10px 10px 10px"
	},
}

export const MasterStudents = ({students}) => (
  	<DashboardContainer pageTitle={'Students'}>
	  	<div className='row'>
	  		<StudentsList students={students} />
	  	</div>
  	</DashboardContainer>
);