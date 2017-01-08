import React from 'react';
import { StyleSheet, css } from 'aphrodite';
//import AppNavigation from '../containers/app-navigation';
import { browserHistory, Link } from 'react-router';
import 'antd/lib/icon/style/css';
import 'antd/lib/menu/style/css';
import 'antd/lib/col/style/css';
import 'antd/lib/row/style/css';
import 'antd/lib/button/style/css';
import { Menu, Icon, Row, Col, Button  } from 'antd';
import { SocialIcon } from 'react-social-icons';
import { appConfig } from '../../modules/config';

const { appName } = appConfig;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;



  const iconStyles = {
    height: 18, 
    width: 18,
    marginRight: 5
  }



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






export const Admin = React.createClass({
  
  propTypes: {
    children: React.PropTypes.element.isRequired,
  },

  render() {

    return <div>
            <AppNavigation currentPath={this.props.location.pathname}  />
              { this.props.children }
          </div>;
  }
  
});
