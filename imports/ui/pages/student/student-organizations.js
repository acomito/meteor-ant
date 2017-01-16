import React from 'react';
import StudentOrganizations  from '../../components/student/student-organizations/student-organizations-container'

const styles={
	raisedButtons: {
		width: "300px",
		margin: "30px 10px 10px 10px"
	},
}

export const StudentOrganizationsPage = (props) => (
	<StudentOrganizations 
		onboarding={props.onboarding} 
	/>
);