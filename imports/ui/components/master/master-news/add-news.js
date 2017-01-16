import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { DashboardContainer } from '../../common'
import ReactTrixEditor from 'react-trix-editor';


const styles = {
	raisedButtons: {
		width: "300px",
		margin: "30px 10px 10px 10px"
	},
}


class ReactTrixEditorDemo extends Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
	    value: ''
	  }
  }

  

  onChange(value) {
    this.setState({
      value
    });
  }

  render() {
    const testProps = {
      onChange: this.onChange,
      onEditor(editor) { console.log(`Editor callback: `, editor); },
      initialValue: 'Hello World',
      placeholder: 'A placeholder shown when the text editor is empty'
    };

    return <ReactTrixEditor {...testProps} />;
  }
}

class AddNewsForm extends React.Component {
	constructor(props){
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
		this.state = {
			loading: false,
		}
	}
	onSubmit(){
		this.setState({loading: true});

		const success = () => {
			this.setState({loading: false});
			browserHistory.push('/master/news');
		}

		
		Meteor.call('News.addNews', {}, function(error, response){
			if (error) { Bert.alert(error.reason, 'danger'); return; }
			setTimeout(function(){
				Bert.alert('success!', 'success');
				success();
			}, 3000);
		});
			
		
	}
	render(){
		const { loading } = this.state;
		return (
			<Card style={{padding: '20px 50px'}}>
				<CardText>
					<ReactTrixEditorDemo />
				</CardText>
				<CardActions>
					<RaisedButton 
						primary={true} 
						disabled={loading} 
						label={!loading ? 'Submit News' : 'Posting...'} 
						onClick={this.onSubmit} 
					/>
				</CardActions>
			</Card>
		);
	}
}


export const MasterAddNews = () => (
  	<DashboardContainer pageTitle={'Add News'}>
	  	<div className='row'>
	  		<AddNewsForm />
	  	</div>
  	</DashboardContainer>
);
