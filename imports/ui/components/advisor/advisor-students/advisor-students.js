import React from 'react';
import { DashboardContainer, StudentsList } from '../../common'


export const AdvisorStudents = ({students}) => (
  	<DashboardContainer pageTitle={'Students'}>
	  	<StudentsList students={students} />
  	</DashboardContainer>
);