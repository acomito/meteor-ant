import React from 'react';
import { Link, browserHistory } from 'react-router';
import { DashboardContainer } from '../../common'
import Joyride from 'react-joyride';
import { Form, Row, Col, Icon, Input, Card, Button, Checkbox, Tag } from 'antd';
import { onboardConfig } from '../../../../modules/config'
import { getIcon, getOrgIcon, resourceItemsSeed } from '../../../../modules/helpers'





const onboardData = [{
          title: onboardConfig.organizations_title,
          text: onboardConfig.organizations_text,
          selector: '.first-step',
          position: onboardConfig.position,
          type: onboardConfig.type,
          style: onboardConfig.onboardStyle
        }];



const OrgTags = ({title, color, fontColor,  items}) => {
  if (items && items.length > 0) {
      return (
        <div style={{marginTop: 5}}>
          <h3>{title}</h3>
          {items.map(item => <Tag color={color} style={{color: fontColor || '#fff'}}>{item}</Tag>)}
        </div>
      );
  }
  //else
  return null;
}


const InnerCard = ({item}) => {
  return (
    <div style={{textAlign: 'left'}}>
        <h1 style={{display: 'inline', marginRight: 10}}>{item.title}</h1>
        <Tag color={'#87d068'} style={{margin: 0, marginBottom: 7}}>{item.orgType}</Tag>
        <p style={{marginBottom: 15}}>{item.description}</p>
        <OrgTags items={item.stages} color={'#efefef'} fontColor={'#888'} title={'Works with businesses in these stages:'} />
        <OrgTags items={item.tags} color={'#efefef'} fontColor={'#888'} title={'Tags:'}  />
    </div>
  );
}


const OrganizationCard = ({item}) => {
  return (
    <Card style={{marginTop: 10, minHeight: 225}} onClick={()=> browserHistory.push(`/student/organizations/${item._id}`)}>
      <Row>
        <Col span='2'>
          {getOrgIcon(item)}
        </Col>
        <Col span='22'>
          <InnerCard item={item} />
        </Col>
      </Row>
    </Card>
  );
}

class OrganizationsList extends React.Component{
  constructor(props){
    super(props);
    this.getJoyride = this.getJoyride.bind(this);
    this.onboardCallback = this.onboardCallback.bind(this);
  }
  componentDidMount() {
    const { onboarding } = this.props;
    if (!onboarding.student_organizations || onboarding.student_organizations === undefined) {
      this.refs.joyride.start();
    }
    
  }
  onboardCallback(value){
    if (value.type === 'finished') {
      console.log(value.type)
      Meteor.call('onboarding.toggleOnboarding', 'student_organizations', function(error, response){
        if (error) { console.log(error); return; }
      });
    }
  }
  getJoyride() {
      const { onboarding } = this.props;
      if (!onboarding.student_organizations || onboarding.student_organizations === undefined) {
        return <Joyride ref='joyride' debug={false} steps={onboardData} type="single" callback={this.onboardCallback} />
      } else {
        return null
      }
  }
  render(){
    const { orgs } = this.props;
    return (
      <div style={{marginTop: 30, paddingBottom: 100}}>
          {this.getJoyride()}
          <div className='first-step'>
          {orgs && orgs.length > 0 ? orgs.map(function(item){
            return <OrganizationCard key={item._id} item={item} />
          }): null}
          </div>
        </div>
    );
  }
}



export const StudentOrganizations = ({onboarding, orgs}) => (
  	<DashboardContainer pageTitle={'Resource Organizations'}>
      <OrganizationsList onboarding={onboarding} orgs={orgs} />
  	</DashboardContainer>
);