import React from 'react';
import { Row, Col, Card } from 'antd';


const styles = {
	labelStyles: {
		display: 'inline',
		color: '#888'
	},
	valueStyles: {
		display: 'inline',
	}
}

const { labelStyles, valueStyles } = styles;

const LabelAndValue = ({ label, value }) => {
	return (
		<div>
			<h3 style={labelStyles}>{label}: </h3>
			<h4 style={valueStyles}> {value} </h4>
		</div>
	);
}

export { LabelAndValue };