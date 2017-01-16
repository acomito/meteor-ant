import React from 'react';
import { Link } from 'react-router';
import { StyleSheet, css } from 'aphrodite'
import { DashboardContainer, FormCard } from '../../common'
import { onboardConfig } from '../../../../modules/config';
import 'antd/lib/form/style/css';
import 'antd/lib/input/style/css';
import 'antd/lib/button/style/css';
import 'antd/lib/card/style/css';
import 'antd/lib/icon/style/css';
import 'antd/lib/checkbox/style/css';
import 'antd/lib/row/style/css';
import 'antd/lib/select/style/css';
import 'antd/lib/date-picker/style/css';
import { Form, Icon, Input, Card, Button, Checkbox, Row, Select, DatePicker } from 'antd';
const FormItem = Form.Item;
 const Option = Select.Option;
const organizations = [];
import { seedTags, seedStages, seedResourceTypes, seedServiceType } from '../../../../modules/helpers'
import moment from 'moment';
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


const AddEventForm = Form.create()(React.createClass({
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
      this.props.form.resetFields();
    }
    let data = { };
    this.props.form.validateFields((error, values) => {
      if (error) { failure(); return;  }
      console.log(values.date)
      let { stages, title, description, tags, location, date, clusters, time } = values
      data = { stages, title, description, tags, location, date: date._d, clusters, time };

      Meteor.call('Events.addEvent', data, function(){
        if (error) { failure(error); return; }
        sucess();
      });
      
    });

  },
  render() {
  	const { clusters, form } = this.props;
    const { getFieldDecorator } = form;
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
	const childrenClusters =  clusters.map(item => <Option key={item.value} value={item.value}>{item.label}</Option>);

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

        <FormItem>
          {getFieldDecorator('date', {
            rules: [{ required: true, message: 'Please input your location!' }],
          })(
          	<DatePicker addonBefore={<Icon type="calendar" />} placeholder="event date"  />
          )}
        </FormItem>

        <FormItem>
          {getFieldDecorator('time', {
            rules: [{ required: true, message: 'Please input a time!' }],
          })(
            <Input addonBefore={<Icon type="user" />} placeholder="time" />
          )}
        </FormItem>

        <FormItem label='Clusters/Industries'>
          {getFieldDecorator('clusters', { rules: myRules.tagsRule })(
            <Select 
            	tokenSeparators={[',']}
              	multiple
              	placeholder="Most relevant to busineses in these industries...">
            {childrenClusters}
            </Select>
          )}
        </FormItem>

        <FormItem label='Stage'>
          {getFieldDecorator('stages', { rules: myRules.tagsRule })(
            <Select 
            	tokenSeparators={[',']}
              multiple
              placeholder="Business stages you help...">
            {childrenStages}
            </Select>
          )}
        </FormItem>
        <FormItem label='Tags'>
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
            Add Event
          </Button>
        </FormItem>
      </Form>
    );
  },
}));




const EventCard = ({event}) => {
  return (
      <div>
        {event.title}
        <Button type={'primary'} onClick={()=> Meteor.call('Events.deleteEvent', event._id)}>delete</Button>
      </div>
  );
}

export const ResourceEvents = ({clusters, events}) => (
  	<DashboardContainer pageTitle={'Resource Events'}>
  		<FormCard>
  			<AddEventForm clusters={clusters} />
  		</FormCard>
      <h1 style={{marginTop: 50}}>Events:</h1>
      <div>
        {events && events.length > 0 ? events.map(function(event){
            return <EventCard key={event._id} event={event} />
        }) : null}
      </div>
  	</DashboardContainer>
);

