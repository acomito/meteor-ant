import React from 'react';
import { DashboardContainer } from '../../common'
import StudentSingle from '../../common/StudentSingle/StudentSingleContainer'






export const StudentStudentSingle = (props) => (
  	<DashboardContainer pageTitle={'Student Profile'}>
  		{console.log(props)}
  		<StudentSingle id={props.id} />
  	</DashboardContainer>
);