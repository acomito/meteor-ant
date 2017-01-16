import React from 'react';
import { Link } from 'react-router';
import { StyleSheet, css } from 'aphrodite'
import { DashboardContainer } from '../../common'
import { onboardConfig } from '../../../../modules/config';
import { seedStages, seedOrgType } from '../../../../modules/helpers';
import { Form, Icon, Input, Card, Button, Checkbox, Row, Select } from 'antd';
const FormItem = Form.Item;
 const Option = Select.Option;
const organizations = [];

//modules

const tags = ['loans', 'funding', 'bank', 'small businesses', 'mainstreet'];


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



const resourceOrg = {
    _id: 1,
    title: 'Local CDFI',
    description: 'Business Loans',
    tags: ['loans', 'funding', 'bank', 'small businesses', 'mainstreet'],
    resourceOrgTitle: 'Local CDFI',
  };

const NormalLoginForm = Form.create()(React.createClass({
  getInitialState () {
    return {
      loading: false
    };
  },
  handleSubmit(e) {
    e.preventDefault();
    this.setState({loading: true});
    const failure = (error) => {
      this.setState({loading: false});
      console.log(error);
    }
    const sucess = () => {
      this.setState({loading: false});
    }
    this.props.form.validateFields((error, values) => {
      if (error) { failure(); return;  }
      let { orgType, stages, title, description, tags, location } = values
      let data = { orgType, stages, title, description, tags, location };

      Meteor.call('Organizations.addOrganization', data, function(){
        if (error) { failure(error); return; }
        sucess();
      });
      
    });

  },
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
    };
    const myRules = {
	      tagsRule: [{ required: true, message: 'Please input your tags!' }],
	    }
	const children =  tags.map(tag => <Option key={tag}>{tag}</Option>);
	const childrenOrgTypes =  seedOrgType.map(orgType => <Option key={orgType}>{orgType}</Option>);
	const childrenStages =  seedStages.map(stage => <Option key={stage.value} value={stage.value}>{stage.label}</Option>);

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('title', {
            rules: [{ required: true, message: 'Please input your organziation title!' }],
          })(
            <Input addonBefore={<Icon type="user" />} placeholder="Organization Title" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('description', {
            rules: [{ required: true, message: 'Please input your last name!' }],
          })(
            <Input addonBefore={<Icon type="user" />} placeholder="description" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('location', {
            rules: [{ required: true, message: 'Please input your location!' }],
          })(
            <Input addonBefore={<Icon type="user" />} placeholder="location" />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label='Type'>
          {getFieldDecorator('orgType', { rules: myRules.tagsRule })(
            <Select placeholder="Your orgType">
            {childrenOrgTypes}
            </Select>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label='Stages'>
          {getFieldDecorator('stages', { rules: myRules.tagsRule })(
            <Select 
            	tokenSeparators={[',']}
              multiple
              placeholder="Business stages you help...">
            {childrenStages}
            </Select>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label='Tags'>
          {getFieldDecorator('tags', { rules: myRules.tagsRule })(
            <Select 
              tokenSeparators={[',']}
              multiple
              placeholder="Your tags"
            >
            {children}
            </Select>
          )}
        </FormItem>
        <FormItem>
          <Button loading={this.state.loading} type="primary" htmlType="submit" className={css(styles.loginButton)}>
            Create Organization Profile
          </Button>
        </FormItem>
      </Form>
    );
  },
}));



const OrganizationCard = ({org}) => {
	return (
		<div>
			{org.title}
      {org.description}
      {org.orgType}
		</div>
	);
}

const EmptyState = () => {
	return (
		<Row>
			<p>You have no organization yet.</p>
			<Card style={{width: 500, margin: 'auto'}}>
				<NormalLoginForm />
			</Card>
		</Row>
	);
}


export const ResourceOrg = ({org}) => (
  	<DashboardContainer pageTitle={'My Organization'}>
  		{org ? <OrganizationCard org={org} /> : <EmptyState />}
  	</DashboardContainer>
);

