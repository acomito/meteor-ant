import React from 'react';
import StudentOrganizationSingle from '../../components/student/student-organizations/student-organization-single-container'

export const StudentOrganizationSinglePage = (props) => (
	<StudentOrganizationSingle id={props.params.id} />
);
