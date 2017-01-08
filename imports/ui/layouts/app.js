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

const styles = StyleSheet.create({
  footerStyles: {
    color: '#666', 
    padding: '20px 5%', 
    height: 150, 
    backgroundColor: '#fafafa',
    textAlign: 'center'
  }
});

  const iconStyles = {
    height: 18, 
    width: 18,
    marginRight: 5
  }

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




const Footer = () => {
  return (
    <Row type="flex" justify="center" align="middle" className={css(footerStyles)}>
      <Col span='8'>
      </Col>
      <Col span='8'>
      </Col>
      <Col span={8} style={{textAlign: 'right'}}>
        <div style={{marginBottom: 10}}>
          <SocialIcon network="facebook"  style={iconStyles} color={'#666'} />
          <SocialIcon network="twitter"   style={iconStyles} color={'#666'} />
          <SocialIcon network="instagram" style={iconStyles} color={'#666'} />
        </div>
        <div>
          <Link style={{marginRight: 10, color: '#888'}}>Privacy Policy</Link>
          <Link style={{marginRight: 10, color: '#888'}}>Help</Link>
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
  render() {
    return (
        <div style={{position: 'relative'}}>
          <AppNavigation  currentPath={this.props.location.pathname}  />
            <div style={{minHeight: '100vh'}}>
             { this.props.children }
            </div>
            <Footer />
        </div>
    );
  }
  
});



