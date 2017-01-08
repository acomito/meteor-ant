import React from 'react';



const DashboardContainer = (props) => (
	<div  className="row" style={{marginLeft: "165px", marginRight: "100px", padding: "50px 0px"}}>
		<div className="box" style={{flex: 1}}>
			<h2>{props.pageTitle}</h2> 
			{props.children}
		</div>
  	</div>
);

export { DashboardContainer }