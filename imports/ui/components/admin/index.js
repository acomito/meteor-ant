import React from 'react';
import { DashboardContainer } from '../../common';
import UsersTable from './UsersTable'
import AdminUsersSingleContainer from './AdminUsersSingleContainer'

export const AdminUsers = () => (
  	<DashboardContainer pageTitle={'Users'}>
  		<UsersTable />
  	</DashboardContainer>
);


export const AdminUsersSingle = (props) => (
  	<AdminUsersSingleContainer id={props.id} />
);