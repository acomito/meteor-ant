import React from 'react';
import { Link, browserHistory } from 'react-router';
//modules
import { handleLogin } from '../../modules/login';
//material-ui stuff
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Form, FormItem, Input, Select, Slider} from 'formsy-antd';
//forms
import Formsy from 'formsy-react';
import { FormsyText } from 'formsy-material-ui/lib';
import 'antd/lib/card/style/css';
import 'antd/lib/button/style/css';
import 'antd/lib/input/style/css';
import 'antd/lib/notification/style/css';
import { Card, Button, Row, Col, notification  } from 'antd';


  const styles = {
    cardStyles: {
      "width": "40%",
      "margin": "auto",
      "marginTop": "40px",
      "padding": "20px",
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
    }
  }


export class Login extends React.Component {


  constructor(props) {
    super(props);
    this.state = { canSubmit: false, loading: false }
    this.enableButton = this.enableButton.bind(this);
    this.submit = this.submit.bind(this);
    this.disableButton = this.disableButton.bind(this);

  }

  submit(data) {
    this.setState({loading: true});
    const success = () => {
          this.setState({loading: false});
          notification['success']({
            message: 'Notification Title',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
          });
    }
    setTimeout(function(){
      success();
    }, 5000);

/*    console.log('it ran')
    let email = data.emailAddress;
    let password = data.password;
    handleLogin(email, password);*/
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  render() {
    return (
      <Card title='Login'>
        <Form onSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton} className="login">
          <FormItem
          required
          label="name"
        ><Input 
            style={styles.textField}
            name="emailAddress" 
            validations="isEmail" 
            validationError="This is not a valid email" 
            required 
          />
          </FormItem>
          <FormItem
          required
          label="Password">
          <Input 
            style={styles.textField} 
            value="" 
            name="password" 
            type="password" 
            required 
          />
          </FormItem>
            <Button loading={this.state.loading} type="submit" onClick={this.submit} type='primary' disabled={!this.state.canSubmit}>
            Login
            </Button>
            <Link to="/recover-password">Forgot Password?</Link>
        </Form>
      </Card>
    );
  }
}


