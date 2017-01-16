import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';



const styles = {
	buttonStyle: {
		width: 200
	},
    cardStyles: {
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


const WizardCard = (props) => {
	return (
		<Card style={{marginTop: 50, height: 400, width: 700}}>
			<CardTitle 
				title={props.title}
			/>
			{props.children}
		</Card>
	);
};

const CardOne = (props) => {
	return (
		<WizardCard
			title='Do You Have an Existing Business or Want to Register the Business You plan to create?'
		>
			<CardActions>
				<RaisedButton  
					style={styles.buttonStyle} 
					secondary={true} 
					label='YES I DO'
					onClick={()=> props.nextStep()}
				/>
				<RaisedButton  
					style={styles.buttonStyle} 
					label='NOT RIGHT NOW' 
					onClick={()=> browserHistory.push('/student/home')} 
				/>
			</CardActions>
		</WizardCard>
	);
};


const CardFinal = (props) => {
	return (
		<WizardCard
			title='Does this look correct?'
		>
		<RaisedButton  
			style={styles.buttonStyle} 
			secondary={true} 
			label='Finish'
			onClick={()=> browserHistory.push('/student/home')} 
		/>
		</WizardCard>
	);
};


class BusinessForm extends Component {
  constructor(props) {
    super(props);
    this.state = { canSubmit: false }
    this.enableButton = this.enableButton.bind(this);
    this.submit = this.submit.bind(this);
    this.disableButton = this.disableButton.bind(this);
  }

  submit(data) {


  	Meteor.call('Businesses.addBusiness', data, function(error, response){
  		if (error) { Bert.alert(error.reason, 'danger'); return; }
  		Bert.alert('your student business profile has been created!', 'success');
  		browserHistory.push('/student/home');
  	});

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
      <CardTitle title="Create a Business Profile" />
        <Formsy.Form onSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
          <FormsyText 
            name="title"
            floatingLabelText="Business Name"
            style={styles.textField}  
            required 
          />
          <FormsyText 
            name="description"
            floatingLabelText="Description" 
            style={styles.textField}   
            required 
          />
          <FormsySelect
            name="stage"
            style={styles.fieldStyle}
            fullWidth={true}
            floatingLabelText="Business Stage"
          >
            <MenuItem key={1} value={'idea'} primaryText='idea stage' />
            <MenuItem key={2} value={'startup'} primaryText='startup stage' />
            <MenuItem key={3} value={'existing'} primaryText='existing stage' />
          </FormsySelect>
          <FormsySelect
            name="help"
            style={styles.fieldStyle}
            fullWidth={true}
            floatingLabelText="Help Needed"
            multiple
          >
            <MenuItem key={1} value={'businessPlanning'} primaryText='Business Planning' />
            <MenuItem key={2} value={'financialManagement'} primaryText='Financial Management' />
            <MenuItem key={3} value={'funding'} primaryText='Funding' />
            <MenuItem key={4} value={'legalAssistance'} primaryText='Legal Assistance' />
            <MenuItem key={5} value={'salesAndMarketing'} primaryText='Sales & Marketing' />
            <MenuItem key={6} value={'researchAndProductDev'} primaryText='Research & Product Dev' />
            <MenuItem key={7} value={'realEstate'} primaryText='realEstate' />
            <MenuItem key={8} value={'workforce'} primaryText='workforce' />
          </FormsySelect>

          <CardActions style={styles.cardActionStyles}>
            <RaisedButton type="submit" fullWidth={true} secondary={true} label="Submit" disabled={!this.state.canSubmit} />
            <Link to="/student/home"><FlatButton label="Skip this for now." /></Link>
          </CardActions>
        </Formsy.Form>


      </Card>
    );
  }
}


export class StudentSignup_One extends Component {
	constructor(props){
		super(props);
		this.state = {
			currentStep: 1
		}
		this.nextStep = this.nextStep.bind(this);
	}
	nextStep(){
		let nextStep = this.state.currentStep + 1;
		this.setState({ currentStep : nextStep });
	}
	render(){
		return (
			<div className='row middle-xs center-xs' style={{flex: 1}}>
				<div className='box'>
					{this.state.currentStep === 1 && <CardOne nextStep={this.nextStep} />}
					{this.state.currentStep === 2 && <BusinessForm />}
				</div>
				
			</div>
		);
	}
}