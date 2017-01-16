import React from 'react';
import 'antd/lib/card/style/css';
import { Card } from 'antd';



const FormCard = (props) => {
	return (
		<Card style={{width: 500, margin: 'auto'}}>
			{props.children}
		</Card>
	);
}

export { FormCard };