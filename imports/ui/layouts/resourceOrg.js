import React from 'react';
import {StudentNavigation} from '../components/student/student-nav/student-nav';
import { browserHistory, Link } from 'react-router';
// ANTD


import { Menu, Icon, Row, Col, message } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;




const Toper = React.createClass({
  getInitialState() {
    return {
      current: 'mail',
    };
  },
  handleClick(e) {
    console.log()
    if (e.key === 'logout') {
      const hide = message.loading('logging you out...', 0);
      setTimeout(function(){
        hide()
        Meteor.logout(() => browserHistory.push('/login'));
      }, 2000);
      return;
    }
    browserHistory.push(`${e.key}`);
    this.setState({
      current: e.key,
    });
  },
  getAvatarDropdown(){
    return (
        <Row type="flex" justify="space-around" align="middle" >
          <Avatar size={30} style={{marginRight: 6}} src={Meteor.user().profile.avatar} />
          {`${Meteor.user().profile.name.first} ${Meteor.user().profile.name.last.charAt(0)}.`}
        </Row>
    );
  },
  getBlankDropdown(){
    return (
            <span>
              <Icon type="user" />
              Account
            </span>
        );
  },
  render() {

    return (
    <Row type="flex" justify="space-around" align="middle"  style={{zIndex: 1000, height: 55, position: 'fixed', top: 0, right: 0, left: 0, paddingLeft: 20, color: '#fff', backgroundColor: '#da5347', borderBottom: '1px solid #e9e9e9'}}>
        <Col span='19'>
          <Link to='/student/home'>
            <h2 style={{fontWeight: 200, color: '#fff'}}>Resource Dashboard<Icon type="rocket" color="#fff" style={{fontSize: 26, marginLeft: 5 }}/></h2>
          </Link>
        </Col>
      	<Col span='3'>
      		<Menu onClick={this.handleClick} selectedKeys={[0]} mode="horizontal" style={{fontWeight: 300, color: '#fff', fontSize: 17, borderBottom: '0px solid transparent', backgroundColor: '#da5347',}}>
  	        <SubMenu title={Meteor.user() ?  this.getAvatarDropdown() : this.getBlankDropdown()}>
  	            <Menu.Item key="/student/profile">
                  <Icon type="user" />Profile
                </Menu.Item>
  	            <Menu.Item key="/student/settings">
                  <Icon type="setting" />Settings
                </Menu.Item>
  	          <Menu.Divider />
  	            <Menu.Item key="logout">
                  <Icon type="logout" />Logout
                </Menu.Item>
  	        </SubMenu>
  	      </Menu>
      	</Col>
    </Row>
    );
  },
});



const Sider = React.createClass({
  getInitialState() {
    return {
      current: this.props.pathname
    };
  },
  handleClick(e) {

  	if (e.key === 'logout') {
  		const hide = message.loading('logging you out...', 0);
	  	setTimeout(function(){
	  		hide()
	  		Meteor.logout(() => browserHistory.push('/login'));
	  	}, 2000);
  		return;
  	}

    browserHistory.push(e.key);
    this.setState({ current: e.key });
  },
  render() {
  	const fontSize = 15;
    return (
      <Menu 
        onClick={this.handleClick}
        style={{ fontSize: 16, zIndex: 0, width: 200, paddingTop: '20px', height: '100%', position: 'fixed', top: 50, bottom: 0, left: 0 }}
        defaultOpenKeys={['sub1']}
        selectedKeys={[this.state.current]}
        mode="inline"
      >
        <Menu.Item  key="/resource/home" style={{ fontSize: fontSize}}>
        	<Icon type="home" />
        	Home
        </Menu.Item>
        <Menu.Item  key="/resource/profile" style={{ fontSize: fontSize}}>
        	<Icon type="user" />
        	Profile
        </Menu.Item>
        <Menu.Item  key={`/resource/organization/${Meteor.userId()}`} style={{ fontSize: fontSize}}>
          <Icon type="user" />
          My Organization
        </Menu.Item>
        <Menu.Item  key={`/resource/events`} style={{ fontSize: fontSize}}>
          <Icon type="calendar" />
          My Events
        </Menu.Item>
        <Menu.Item  key={`/resource/items`} style={{ fontSize: fontSize}}>
          <Icon type="rocket" />
          My Resources
        </Menu.Item>
        <Menu.Item  key="/resource/settings" style={{ fontSize: fontSize}}>
        	<Icon type="setting" />
        	Settings
        </Menu.Item>
        <Menu.Item  key="/resource/help" style={{ fontSize: fontSize}}>
        	<Icon type="question-circle-o" />
        	Help
        </Menu.Item>
         <Menu.Divider />
        <Menu.Item key="logout" style={{ fontSize: fontSize}}>
        	<Icon type="logout" />
        	Logout
        </Menu.Item>
      </Menu>
    );
  },
});


export class ResourceOrgLayout extends React.Component {
  constructor(props){
    super(props)
  }
	render() {
    console.log(this.props)
    return (
    	<div>
	        <Toper pathname={this.props.location.pathname} />
	        <Sider pathname={this.props.location.pathname} />
	        <div style={{marginRight: 65}}>
            {this.props.children}
	        </div>
      	</div>
    );
  }
}
