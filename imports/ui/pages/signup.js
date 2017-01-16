import React from 'react';
import { Link } from 'react-router';
import { handleSignup } from '../../modules/signup';
import { StyleSheet, css } from 'aphrodite';
import Joyride from 'react-joyride';

//modules
import { onboardConfig } from '../../modules/config';
import { Form, Icon, Input, Card, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

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

const NormalLoginForm = Form.create()(React.createClass({
  getInitialState () {
    return {
      loading: false
    };
  },
  handleSubmit(e) {
    e.preventDefault();
    this.setState({loading: true});
    const failure = () => {
      this.setState({loading: false});
    }
    const sucess = () => {
      this.setState({loading: false});
    }
    this.props.form.validateFields((err, values) => {
      if (err) {
        failure();
      }
      if (!err) {
        setTimeout(function(){
          let firstName = values.firstName;
          let lastName =  values.lastName;
          let graduationYear =  values.graduationYear;
          let emailAddress = values.emailAddress;
          let password = values.password;
          handleSignup(firstName, lastName, graduationYear, emailAddress, password );
          sucess();
        }, 3000);
      }
    });

  },
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('firstName', {
            rules: [{ required: true, message: 'Please input your first name!' }],
          })(
            <Input addonBefore={<Icon type="user" />} placeholder="First name" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('lastName', {
            rules: [{ required: true, message: 'Please input your last name!' }],
          })(
            <Input addonBefore={<Icon type="user" />} placeholder="Last name" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('graduationYear', {
            rules: [{ required: true, message: 'What year will you (hopefully) graduate?' }],
          })(
            <Input addonBefore={<Icon type="book" />} placeholder="Graduation Year" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('emailAddress', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <Input addonBefore={<Icon type="mail" />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input a Password!' }],
          })(
            <Input addonBefore={<Icon type="lock" />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          <Button loading={this.state.loading} type="primary" htmlType="submit" className={css(styles.loginButton)}>
            Create Account
          </Button>
          Or <Link to='/login'>Login</Link>
        </FormItem>
      </Form>
    );
  },
}));





export class Signup extends React.Component {

  constructor(props) {
    super(props);
    this.state = { canSubmit: false }
    this.submit = this.submit.bind(this);
    this.callBack = this.callBack.bind(this);

  }

  submit(data) {
    let firstName = data.firstName;
    let lastName =  data.lastName;
    let graduationYear =  data.graduationYear;
    let emailAddress = data.emailAddress;
    let password = data.password;
    
    handleSignup(firstName, lastName, graduationYear, emailAddress, password );

  }
  componentDidMount() {
    this.refs.joyride.start();
  }
  callBack(data){
    
    if (data.action === 'close') {
      console.log(data)
    }
  }
  render() {

     let data = [{
          title: onboardConfig.signupPage_demo_title,
          text: onboardConfig.signupPage_demo_text,
          selector: '.first-step',
          position: 'top',
          type: 'hover',
          style: onboardConfig.onboardStyle,
        }];

    return (
      <div>
      <Joyride
          ref='joyride'
          debug={false}
          steps={data}
          type="single"
          callback={this.callBack}
      />
      <Card className={css(styles.cardStyles) + ' first-step'} title={<p style={{textAlign: 'center'}}>Create a Student Account</p>}>
        <NormalLoginForm />
      </Card>
      </div>
    );
  }
}

