import React from 'react';
import { Link, browserHistory } from 'react-router';
//common
import { DashboardContainer } from '../../common'
//antd
import { message, Card, Button, Form, Switch, Popconfirm } from 'antd';
import { composeWithTracker } from 'react-komposer';
import { Loading } from '../../loading.js';


// CONSTANTS
// ================================================
const FormItem = Form.Item;

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


// INTERNAL COMPONENT
// ================================================
const deleteUser = () => {
  Meteor.call('utilities.signup.deleteAccount', function(error, response){
      if (error) { console.log(error); return; }
      if (Meteor.userId()) { Meteor.logout(() => browserHistory.push('/login')); }
      browserHistory.push('/login');
      message.info("your account has been deleted");
  });
}


// EXPORTED COMPONENT
// ================================================
const SettingsForm = Form.create()(React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        Meteor.call('utilities.users.saveSettings', values, function(error, response){
          if(error){ message.error(error.reason); return; }
          message.success('your settings were updated!');
        });
      }
    });
  },

  render() {
    const { user, form } = this.props;
    const { getFieldDecorator } = form;
    const formItemLayout = {
      labelCol: { span: 10, offset: 4 },
      wrapperCol: { span: 10 },
    };
    
    return (
      <Card style={styles.cardStyles} >
        <Form onSubmit={this.handleSubmit}>
          <FormItem {...formItemLayout} label="Resource Updates">
            {getFieldDecorator('email_Student_Resources', { valuePropName: 'checked', initialValue: user.profile.settings && user.profile.settings.email_Student_Resources || false })(
              <Switch />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="Advisor Updates">
            {getFieldDecorator('email_Student_Advisors', { valuePropName: 'checked', initialValue: user.profile.settings && user.profile.settings.email_Student_Advisors || false })(
              <Switch />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="Events Updates">
            {getFieldDecorator('email_Student_Events', { valuePropName: 'checked', initialValue: user.profile.settings &&  user.profile.settings.email_Student_Events || false})(
              <Switch />
            )}
          </FormItem>
          <FormItem wrapperCol={{ span: 12, offset: 6 }}>
            <Button type="primary" htmlType="submit">Submit</Button>
          </FormItem>
        </Form>
      </Card>
    );
  },
}));






const composer = (params, onData) => {
  const userProfileSub = Meteor.subscribe('userProfile');
  if (userProfileSub.ready()) {
    const user = Meteor.users.findOne({_id: Meteor.userId()});
    onData(null, { user });
  }
};

export default composeWithTracker(composer, Loading)(SettingsForm);




