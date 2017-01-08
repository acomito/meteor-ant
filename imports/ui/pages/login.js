import React from 'react';
import { Link, browserHistory } from 'react-router';
import { StyleSheet, css } from 'aphrodite'
//modules
import { handleLogin } from '../../modules/login';
//material-ui stuff

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

    console.log(this.state.loading)
    this.setState({loading: true});
    const doneLoading = () => this.setState({loading: false})
    this.props.form.validateFields((err, values) => {
      if (!err) {
        setTimeout(function(){
          let email = values.emailAddress;
          let password = values.password;
          handleLogin(email, password);
          doneLoading();
        }, 3000);
      }
     
    });

  },
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('emailAddress', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input addonBefore={<Icon type="mail" />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input addonBefore={<Icon type="lock" />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          {/*<a style={{float: 'right'}}>Forgot password</a>*/}
          <Button loading={this.state.loading} type="primary" htmlType="submit" className={css(styles.loginButton)}>
            Login
          </Button>
          Or <Link to='/signup'>register now!</Link>
        </FormItem>
      </Form>
    );
  },
}));



export class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = { canSubmit: false }
    this.enableButton = this.enableButton.bind(this);
    this.submit = this.submit.bind(this);
    this.disableButton = this.disableButton.bind(this);
  }

  submit(data) {
    let email = data.emailAddress;
    let password = data.password;
    handleLogin(email, password);
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  render() {
    return (
      <Card className={css(styles.cardStyles)} title={<p style={{textAlign: 'center'}}>Login</p>} >
        <NormalLoginForm />
      </Card>
    );
  }
}


