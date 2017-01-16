import React from 'react';
import { StudentPerks } from '../../components/student/student-perks/student-perks'

const styles={
	raisedButtons: {
		width: "300px",
		margin: "30px 10px 10px 10px"
	},
}

export const StudentPerksPage = (props) => {
	return (
		<StudentPerks onboarding={props.onboarding} />
	);
}
	