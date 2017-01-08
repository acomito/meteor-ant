
import React from 'react';
import { browserHistory, Link } from 'react-router';
import { Button, Row, Col, Input, Icon, Card, Progress } from 'antd';



export class SearchArea extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			searchValue: ''
		}
		this.onChange = this.onChange.bind(this);
	}
	onChange(e){
		let searchValue = e.target.value;
		this.setState({ searchValue });
	}
	render(){
		const { searchStyles, } = this.props;
		return (
			<Row 
				type="flex" 
				align="middle" 
				style={searchStyles}
			>
				<Col span='20'>
				{/*id='search-box'*/}
					<Input
					  
					  id='search-box-results'
			          placeholder="Enter hair brand name"
			          prefix={<Icon type="search" style={{fontSize: 16, marginLeft: 5, marginTop: 13, color: '#d70b52', fontWeight: 800}} />}
			          value={this.state.searchValue}
			          onChange={this.onChange}
			        />
				</Col>
				<Col span='4'>
					<Link to={{pathname: '/results', query: { name: this.state.searchValue } }}>
						<Button 
							style={{borderBottomLeftRadius: 0, borderTopLeftRadius: 0, height: 45, border: 'none', color: '#fff', backgroundColor: '#d70b52',}}
						>
							SEARCH & COMPARE
						</Button>
					</Link>
		        </Col>
	      	</Row>
		);
	}
}