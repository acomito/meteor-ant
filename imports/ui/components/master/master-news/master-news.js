import React from 'react';
import { Link, browserHistory } from 'react-router';
import { DashboardContainer } from '../../common'

const styles={
	raisedButtons: {
		width: "300px",
		margin: "30px 10px 10px 10px"
	},
}


const NewsItem = ({item}) =>  (
	<Card>
		<h1>{item.title}</h1>
	</Card>
);


export const MasterNews = ({ news }) => (
  	<DashboardContainer pageTitle={'Master News'}>
  		<RaisedButton label='+ Add News' onClick={()=> browserHistory.push('/master/news/add')} />
  		<div className='row'>
  			<div className='box'>
		  		{ news && news.length > 0 ? news.map(function(item){
		  			return <NewsItem key={item._id} item={item} />
		  		}): null }
	  		</div>
  		</div>
  	</DashboardContainer>
);
