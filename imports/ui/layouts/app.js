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

const Navigation = React.createClass({
  getInitialState() {
    return {
      current: 'mail',
    };
  },
  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  },
  render() {
    return (
      <Menu onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >

	      		<Menu.Item key="mail">
			      <Icon type="mail" />Navigation One
			    </Menu.Item>
			    <Menu.Item key="app" disabled>
			      <Icon type="appstore" />Navigation Two
			    </Menu.Item>
			    <SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
			      <MenuItemGroup title="Item 1">
			        <Menu.Item key="setting:1">Option 1</Menu.Item>
			        <Menu.Item key="setting:2">Option 2</Menu.Item>
			      </MenuItemGroup>
			      <MenuItemGroup title="Item 2">
			        <Menu.Item key="setting:3">Option 3</Menu.Item>
			        <Menu.Item key="setting:4">Option 4</Menu.Item>
			      </MenuItemGroup>
			    </SubMenu>
			    <Menu.Item key="alipay">
			      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
			    </Menu.Item>
 
      </Menu>
    );
  },
});


const AppNavigation = () => {
	return (
		<Row style={{backgroundColor: '#fff'}}>
			<Col span='11'>
				<h1>{ appName }</h1>
			</Col>
			<Col span='13'>
				<Navigation />
			</Col>
		</Row>
	);
}

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



