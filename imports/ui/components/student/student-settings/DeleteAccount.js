import React from 'react';
import { Link, browserHistory } from 'react-router';
//common
import { DashboardContainer } from '../../common'
//antd
import { message, Card, Button, Popconfirm } from 'antd';



// CONSTANTS
// ================================================




// STYLES
// ================================================
  const styles = {
    cardStyles: {
      "width": "40%",
      "margin": "auto",
      "marginTop": "40px",
      "padding": "5px 20px",
      textAlign: "center",
    },
    textField: {
      display: "block",
      width: "70%",
      margin: "auto",
      background: "#ffffff",
      backgroundColor: "#ffffff",
      marginBottom: "20px",
    },
    cardActionStyles: {
      margin: "auto"
    },
    	raisedButtons: {
		width: "300px",
		margin: "30px 10px 10px 10px"
	},
	switchStyle: {
      marginBottom: 16,
    },
  }


class AdminUserControls extends React.Component {
  constructor(props){
    super(props);
    this.confirmDelete = this.confirmDelete.bind(this);
  }
  confirmDelete(){
    const { user } = this.props;
    Meteor.call('utilities.signup.deleteAccount', function(error, response){
        if (error) { console.log(error); return; }
        if (Meteor.userId()) { Meteor.logout(() => browserHistory.push('/login')); }
        browserHistory.push('/login');
        message.info("your account has been deleted");
    });
  }
  render(){
    return (
      <div>
        <Popconfirm title="Are you sure you want to delete your account?" onConfirm={this.confirmDelete} okText="Yes" cancelText="No">
            <Button type='primary'>Delete Account</Button>
          </Popconfirm>
      </div>
    );
  }
}




export const DeleteAccount = () => {
  return (
    <Card style={styles.cardStyles}>
      <h1>Delete Your Account</h1>
      <AdminUserControls />
    </Card>
  );
}