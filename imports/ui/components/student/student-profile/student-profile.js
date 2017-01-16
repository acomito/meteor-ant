import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { DashboardContainer } from '../../common'
import 'antd/lib/form/style/css';
import 'antd/lib/input/style/css';
import 'antd/lib/button/style/css';
import 'antd/lib/card/style/css';
import 'antd/lib/icon/style/css';
import 'antd/lib/checkbox/style/css';
import 'antd/lib/notification/style/css';
import 'antd/lib/select/style/css';
import 'antd/lib/upload/style/css';

import { handleFileUpload } from '../../../../modules/helpers'

import { Form, Icon, Input, Card, Button, Checkbox, notification, Select, Upload } from 'antd';

const FormItem = Form.Item;
 const Option = Select.Option;

const skills = [
  'marketing',
  'management',
  'leadership',
  'banking',
  'analytics',
  'social analytics',
  'conflict management',
  'account',
  'digital media',
  'finance',
  'human resources',
  'information technology',
  'javascript',
  'java',
  'css',
  'html',
  'wordpress',
  'illustrator',
  'design',
  'ui/ux',
  'public relations',
  'microsoft office',
  'public speaking'
]

  const styles = StyleSheet.create({
    cardStyles: {
      "maxWidth": 400,
      "margin": "auto",
      "marginTop": "40px",
      "padding": "20px",
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
    loginButton: {
      width: '100%'
    }
  });

const StudentProfileForm = Form.create()(React.createClass({
  getInitialState () {
    return {
      loading: false
    };
  },
  handleSubmit(e) {
    e.preventDefault();
    this.setState({loading: true});

    const failure = (reason) => {
      this.setState({loading: false});
      if (!reason) { return; }
      notification.error({message: reason, description: ''});
    }
    const sucess = () => {
      notification.success({message: 'Profile saved!', description: ''});
      this.setState({loading: false});
    }

    this.props.form.validateFields((error, values) => {
      if (error) { failure(); return; }
      let { firstName, lastName, graduationYear, skills, needs, major } = values;
      let data = { firstName, lastName, graduationYear, skills, needs, major };
      setTimeout(function(){
        Meteor.call('utilities.users.saveStudentProfile', data, function(error, response){
          if (error) { failure(error.reason); return; }
          sucess();
          return;
        });
      }, 2000);
    });

  },
  render() {
    const { form, user } = this.props;
    const { getFieldDecorator } = form;

    const myRules = {
    	firstNameRule: [{ required: true, message: 'Please input your first name!' }],
    	lastNameRule: [{ required: true, message: 'Please input your last name!' }],
    	graduationYearRule: [{ required: true, message: 'Please input your graduation year!' }],
      skillsRule: [{ required: true, message: 'Please input your skills!' }],
      needsRule: [{ required: true, message: 'What sort of skills do you need at your business?' }],
      majorRule: [{ required: false, message: 'What sort of skills do you need at your business?' }],
    }

    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 19 },
    };
   

    const children =  skills.map(skill => <Option key={skill}>{skill}</Option>);

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('firstName', {rules: myRules.firstNameRule, initialValue: user.profile.name.first })(
            <Input addonBefore={<Icon type="user" />} placeholder="First name" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('lastName', { rules: myRules.lastNameRule, initialValue: user.profile.name.last })(
            <Input addonBefore={<Icon type="user" />} placeholder="Last name" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('graduationYear', { rules: myRules.graduationYearRule, initialValue: user.profile.graduationYear  })(
            <Input addonBefore={<Icon type="book" />} placeholder="Graduation Year" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('major', { rules: myRules.majorRule, initialValue: user.profile.major  })(
            <Input addonBefore={<Icon type="paper-clip" />} placeholder="Your major" />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label='Skills'>
          {getFieldDecorator('skills', { rules: myRules.skillsRule, initialValue: user.profile.skills,  })(
            <Select 
              tokenSeparators={[',']}
              multiple
              placeholder="Your skills"

            >
            {children}
            </Select>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label='Needs'>
          {getFieldDecorator('needs', { rules: myRules.needsRule, initialValue: user.profile.needs,  })(
            <Select 
              tokenSeparators={[',']}
              multiple
              placeholder="Your needs"

            >
            {children}
            </Select>
          )}
        </FormItem>
        <FormItem>
          <Button loading={this.state.loading} type="primary" htmlType="submit" className={css(styles.loginButton)}>
            Save Profile
          </Button>
        </FormItem>
      </Form>
    );
  },
}));


const ChangePassword = Form.create()(React.createClass({
  getInitialState () {
    return {
      loading: false
    };
  },
  handleSubmit(e) {
    e.preventDefault();
    this.setState({loading: true});
    const failure = (error) => {
      this.props.form.resetFields();
      notification.error({
        message: error.reason,
        description: ''
      })
      this.setState({loading: false});
    }
    const success = () => {
      this.setState({loading: false});
      this.props.form.resetFields();
      notification.success({
        message: 'Password successfully changed!',
        description: ''
      })
    }
    
    this.props.form.validateFields((error, values) => {
      if (error) { failure(); return; }
      setTimeout(function(){
        Accounts.changePassword(values.oldPassword, values.newPassword, function(error){
          if (error) { failure(error); return; }
          success();
          return;
        });
      }, 2000);

    });

  },
  render() {
    const { form, user } = this.props;
    const { getFieldDecorator } = form;
    console.log(user)
    const myRules = {
      oldPasswordRule: [{ required: true, message: 'Please input your old password!' }],
      newPasswordRule: [{ required: true, message: 'Please input your new password!' }]
    }
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('oldPassword', {rules: myRules.oldPasswordRule })(
            <Input type="password"  addonBefore={<Icon type="lock" />} placeholder="Old Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('newPassword', { rules: myRules.newPasswordRule })(
            <Input type="password"  addonBefore={<Icon type="lock" />} placeholder="New Password" />
          )}
        </FormItem>
        <FormItem>
          <Button loading={this.state.loading} type="primary" htmlType="submit" className={css(styles.loginButton)}>
            Change Password
          </Button>
        </FormItem>
      </Form>
    );
  },
}));

export class StudentProfileCard extends React.Component{
  constructor(props){
    super(props);
    this.customRequest = this.customRequest.bind(this);
    this.onChange = this.onChange.bind(this);
    const { user } = this.props;
    this.state = {
      avatar: user && user.profile && user.profile.avatar
    }
  }
  onChange(fileList){
    this.setState ({fileList})
  }
  customRequest(file, fileList){
    console.log(file)
    const success = (response) => {
      this.setState({avatar: response});
      Meteor.call('utilities.users.saveAvatar', response, function(){
        console.log('done!!!!');
      });
    }
    handleFileUpload(file, "UsersAvatar",  function(error, response){
      if (error) { console.log(error); return; }
      success(response);
    });
    return false;
  }
  render(){
    const { user } = this.props;
    return (
        <div>
        <Card className={css(styles.cardStyles)} title='Your Profile'>
          <div style={{marginBottom: 30, textAlign: 'center'}}>
            <img src={this.state.avatar} style={{display: 'block', margin: '15px auto', borderRadius: '50%', height: 110, width: 110}}/>
            <Upload beforeUpload={this.customRequest} onChange={this.onChange}>
              <Button type="ghost">
                <Icon type="upload" /> Click to Upload
              </Button>
            </Upload>
          </div>
          <StudentProfileForm user={user} />
        </Card>
        <Card className={css(styles.cardStyles)} title='Change Password'>
          <ChangePassword user={user} />
        </Card>
      </div>
    );
  }
}

export const StudentProfile = ({user}) => (
  	<DashboardContainer pageTitle={'Student Profile'}>
	  		<StudentProfileCard user={user} />
  	</DashboardContainer>
);

