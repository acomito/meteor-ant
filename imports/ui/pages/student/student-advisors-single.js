import React from 'react';
import StudentAdvisorsSingle from '../../components/student/student-advisors/student-advisors-single-container'

export const StudentAdvisorsSinglePage = (props) => (
	<StudentAdvisorsSingle id={props.params.id} />
);
