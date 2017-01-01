import React from 'react';
//import AppNavigation from '../containers/app-navigation';
import { browserHistory } from 'react-router';
import 'antd/lib/icon/style/css';
import 'antd/lib/menu/style/css';
import 'antd/lib/col/style/css';
import 'antd/lib/row/style/css';
import { Menu, Icon, Row, Col  } from 'antd';


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

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
				<h1>APPLICATION NAME</h1>
			</Col>
			<Col span='13'>
				<Navigation />
			</Col>
		</Row>
	);
}


export const App = React.createClass({
  
  propTypes: {
    children: React.PropTypes.element.isRequired,
  },

  render() {

    return <div>
            {/*<AppNavigation currentPath={this.props.location.pathname}  />*/}
            <AppNavigation  currentPath={this.props.location.pathname}  />
              { this.props.children }
          </div>;
  }
  
});
