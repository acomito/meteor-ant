import React from 'react';
import SettingsForm from './student-settings.js'
import { DeleteAccount } from './DeleteAccount'
import { DashboardContainer } from '../../common';


export const StudentSettings = () => (
  	<DashboardContainer pageTitle={'Student Settings'}>
	  		<SettingsForm />
        <DeleteAccount />
  	</DashboardContainer>
);