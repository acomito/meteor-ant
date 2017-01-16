import React from 'react';
import { StyleSheet, css } from 'aphrodite'
import { browserHistory, Link } from 'react-router';
import { appConfig } from '../../modules/config';
import { SocialIcon } from 'react-social-icons';

import { Menu, Icon, Row, Col, message } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

  const iconStyles = {
    height: 18, 
    width: 18,
    marginRight: 5,
  }

const { appName } = appConfig;


const styles = StyleSheet.create({
  footerStyles: {
    color: '#fff', 
    padding: '20px 35px', 
    height: 200, 
    backgroundColor: '#da5347'
  }
});

const { footerStyles } = styles;

const AppNavigation = React.createClass({
  getInitialState() {
      return {
        current: this.props.pathname
      };
    
  },
  handleClick(e) {
    browserHistory.push(e.key);
    this.setState({ current: e.key });
    return;  
  },
  render() {
    return (
    <Row className='landing-menu' type="flex" justify="space-around" align="middle"  style={{height: 55, zIndex: 1000, paddingLeft: 95, color: '#fff', backgroundColor: '#da5347', borderBottom: '1px solid #e9e9e9'}}>
      <Col span='19'>
        <Link to='/'>
          <h2 style={{fontSize: 21, color: '#fff'}}>
            {appName}
            <Icon type="rocket" color="#fff" style={{fontWeight: 200, fontSize: 26, marginLeft: 5 }}/>
          </h2>
        </Link>
      </Col>
      <Col span='5'>
        <Menu onClick={this.handleClick} selectedKeys={[this.props.pathname]} mode="horizontal" style={{height: 54, backgroundColor: '#da5347', borderBottom: '0px solid transparent'}}>
        <Menu.Item style={{height: 54, }} key="/">Home</Menu.Item>
        <Menu.Item style={{height: 54, }} key="/signup">Signup</Menu.Item>
        <Menu.Item style={{height: 54, }} key="/login">Login</Menu.Item>
        </Menu>
      </Col>
        
      </Row>
    );
  },
});


/*const Footer = () => {
  return (
    <Row
      gutter={40}
      type="flex" 
      justify="space-around" 
      align="middle"
      className={css(footerStyles)}
    >
    <div style={{width: '80%'}}>
      <Col span='18'>
      </Col>
      <Col span='6'>
        <Link style={{display: 'block', color: '#fff'}} to='/signup'>Sign up</Link>
        <Link style={{display: 'block', color: '#fff'}} to='/login'>Login</Link>
        <p>&copy; 2017 { appName }</p>
      </Col>
       </div>
    </Row>
  );
}*/

const Footer = () => {
  return (
    <Row type="flex" justify="center" align="middle" className={css(footerStyles)}>
      <Col span='8'>
      </Col>
      <Col span='8'>
      </Col>
      <Col span={8} style={{textAlign: 'right'}}>
        <div style={{marginBottom: 10}}>
          <SocialIcon network="facebook"  style={iconStyles} color={'#fff'} />
          <SocialIcon network="twitter"   style={iconStyles} color={'#fff'} />
          <SocialIcon network="instagram" style={iconStyles} color={'#fff'} />
        </div>
        <div>
          <Link style={{marginRight: 10, color: '#fff'}}>Privacy Policy</Link>
          <Link style={{marginRight: 10, color: '#fff'}}>Help</Link>
          <span>&copy; { appName }, 2017</span>
        </div>
      </Col>
    </Row>
  );
}

export const App = React.createClass({
  
  propTypes: {
    children: React.PropTypes.element.isRequired,
  },
  componentWillMount(){
    if (Meteor.userId()) {
      browserHistory.push('/student/home')
    }
  },
  render() {

    return (
        <div style={{position: 'relative'}}>
          <AppNavigation pathname={this.props.location.pathname}  />
            <div style={{minHeight: '100vh'}}>
             { this.props.children }
            </div>
          <Footer />
        </div>
    );
  }




  
});





