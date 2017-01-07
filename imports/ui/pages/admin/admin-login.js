import React from 'react';
import { Link, browserHistory } from 'react-router';
import { StyleSheet, css } from 'aphrodite';
//modules




  const styles = StyleSheet.create({
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
});
    




class AdminLogin extends React.Component {


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
   // handleLogin(email, password);
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  render() {
    return (
      <Card className={css(styles.cardStyles)} >
      {/*<CardTitle title="Admin" />
        <Formsy.Form onSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton} className="login">
          <FormsyText 
            floatingLabelText="Email" 
            className={css(styles.textField)}
            name="emailAddress" 
            validations="isEmail" 
            validationError="This is not a valid email" 
            required 
          />
          <FormsyText 
            floatingLabelText="Password" 
            className={css(styles.textField)}
            value="" 
            name="password" 
            type="password" 
            required 
          />
          <CardActions className={css(styles.cardActionStyles)}>
            <RaisedButton type="submit" secondary={true} label="Login" disabled={!this.state.canSubmit} />
            <Link to="/recover-password"><FlatButton label="Forgot Password?" /></Link>
          </CardActions>
        </Formsy.Form>*/}
      </Card>
    );
  }
}

export const AdminLoginPage = () => (
  	<div  className="row center-xs middle-xs" style={{padding: "100px 0px"}}>
		<div className="box" style={{width: '100%'}}>
	  		<AdminLogin />
		</div>
  	</div>
);
