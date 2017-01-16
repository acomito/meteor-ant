import React from 'react';
import { StudentResources }  from '../../components/student/student-resources/student-resources'

const styles={
	raisedButtons: {
		width: "300px",
		margin: "30px 10px 10px 10px"
	},
}

export const StudentResourcesPage = (props) => (
	<StudentResources onboarding={props.onboarding} />
);



