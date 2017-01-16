import React from 'react';
import StudentThread from '../../components/student/student-messages/student-thread-container'

export const StudentThreadPage = (props) => (
	<StudentThread id={props.params.id} />
);
