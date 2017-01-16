import React from 'react';
import { Link } from 'react-router';
import { StyleSheet, css } from 'aphrodite'
import { DashboardContainer } from '../../common'
import { onboardConfig } from '../../../../modules/config';
import 'antd/lib/form/style/css';
import 'antd/lib/input/style/css';
import 'antd/lib/button/style/css';
import 'antd/lib/card/style/css';
import 'antd/lib/icon/style/css';
import 'antd/lib/checkbox/style/css';
import 'antd/lib/row/style/css';
import 'antd/lib/select/style/css';
import { Form, Icon, Input, Card, Button, Checkbox, Row, Select } from 'antd';
const FormItem = Form.Item;
 const Option = Select.Option;
const organizations = [];
import { seedTags, seedStages, seedResourceTypes, seedServiceType } from '../../../../modules/helpers'

//modules



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


const AddResourceForm = Form.create()(React.createClass({
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
      let { resourceType, stages, title, description, tags, location } = values
      let data = { resourceType, stages, title, description, tags, location };

      Meteor.call('resourceItems.addResource', data, function(){
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

	const children =  seedTags.map(tag => <Option key={tag}>{tag}</Option>);
	const childrenResourceTypes =  seedResourceTypes.map(orgType => <Option key={orgType}>{orgType}</Option>);
	const childrenStages =  seedStages.map(stage => <Option key={stage.value} value={stage.value}>{stage.label}</Option>);

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('title', {
            rules: [{ required: true, message: 'Please input your resource title!' }],
          })(
            <Input addonBefore={<Icon type="user" />} placeholder="Resource Title" />
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
          {getFieldDecorator('resourceType', { rules: myRules.tagsRule })(
            <Select placeholder="Your orgType">
            {childrenResourceTypes}
            </Select>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label='Stage'>
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
            Add Resource
          </Button>
        </FormItem>
      </Form>
    );
  },
}));


export const ResourceItemsList = () => (
  	<DashboardContainer pageTitle={'Your Organizations Resources'}>
  		<Card style={{width: 500, margin: 'auto'}}>
  			<AddResourceForm />
  		</Card>
  	</DashboardContainer>
);

