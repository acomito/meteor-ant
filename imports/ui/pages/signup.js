import React from 'react';
import { Link } from 'react-router';
import { handleSignup } from '../../modules/signup';
import {Card } from 'antd';

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


export class Signup extends React.Component {

  constructor(props) {
    super(props);
    this.state = { canSubmit: false }
    this.enableButton = this.enableButton.bind(this);
    this.submit = this.submit.bind(this);
    this.disableButton = this.disableButton.bind(this);
  }

  submit(data) {
    let firstName = data.firstName;
    let lastName =  data.lastName;
    let emailAddress = data.emailAddress;
    let password = data.password;
    
    handleSignup(firstName, lastName, emailAddress, password );

  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  render() {
    return (
      <Card style={styles.cardStyles} >
{/*      <CardTitle title="Login" />
        <Formsy.Form onSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
          <FormsyText 
            name="firstName"
            floatingLabelText="First Name"
            style={styles.textField}  
            required 
          />
          <FormsyText 
            name="lastName"
            floatingLabelText="Last Name" 
            style={styles.textField}   
            required 
          />
          <FormsyText 
            floatingLabelText="Email" 
            style={styles.textField}  
            name="emailAddress" 
            validations="isEmail" 
            validationError="This is not a valid email" 
            required 
          />
          <FormsyText 
            floatingLabelText="Password" 
            style={styles.textField}  
            name="password" 
            type="password" 
            required 
          />
          <CardActions style={styles.cardActionStyles}>
            <RaisedButton type="submit" secondary={true} label="Sign Up" disabled={!this.state.canSubmit} />
            <Link to="/login"><FlatButton label="Already have an account?" /></Link>
          </CardActions>
        </Formsy.Form>*/}
      </Card>
    );
  }
}

