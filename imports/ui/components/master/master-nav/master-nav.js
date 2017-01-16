import React from 'react';
import { browserHistory, Link } from 'react-router';
import { Meteor } from 'meteor/meteor';

import { returnActiveLink } from '../../../../modules/active-helpers';

//material-ui stuff

import IconButton from 'material-ui/IconButton';


const styles = {
  AppNavigation: {
    color: "#ffffff",
  },
  titleLink: {
    textDecoration: "none",
    color: "#ffffff"
  },
  navLink: {
    color: "#ffffff"
  }
}



function UserNameDropDown(props) {
  
  const userName = () => {
      const user = Meteor.user();
      const name = user && user.profile ? user.profile.name : '';
      return user ? `${name.first} ${name.last}` : '';
    }

  return <FlatButton 
          label={userName()} 
          labelPosition="before" 
          style={styles.navLink}  
          icon={<ArrowDropDown />} 
          onTouchTap={props.handleTouchTap} 
          >
          </FlatButton>;
}

export class AuthenticatedNavigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      open: false
    };
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
  }

  handleTouchTap(event){
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  }

handleLogout() {
  Meteor.logout(() => browserHistory.push('/login'));
}

  handleRequestClose(){
    this.setState({
      open: false,
    });
  }

  render() {
    const currentPath = this.props.currentPath;
    return <div className="navLinks" >
            <UserNameDropDown handleTouchTap={this.handleTouchTap} />
            <Popover
              open={this.state.open}
              anchorEl={this.state.anchorEl}
              anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}
              onRequestClose={this.handleRequestClose}
            >
              <Menu>
                <MenuItem primaryText="Logout" onTouchTap={ this.handleLogout }  />
              </Menu>
            </Popover>
        </div>
  }
  
}


AuthenticatedNavigation.propTypes = {
  hasUser: React.PropTypes.object,
  currentPath: React.PropTypes.string,
};




export class MasterNavigation extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {open: false};
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  handleClose(){
    this.setState({open: false});
  } 
  render() {
    return <div>
              <AppBar 
                title={<Link to="/master/home" style={styles.titleLink}>Master Dashboard</Link>}
                style={styles.AppNavigation}
                iconElementRight={ <AuthenticatedNavigation currentPath={this.props.currentPath} />}
                iconElementLeft={<IconButton onClick={this.handleToggle}><Menu className="mobileNav" color={"#FFFFFF"} /></IconButton>}
              />
            </div>
  }
}


MasterNavigation.propTypes = {
  hasUser: React.PropTypes.object,
  currentPath: React.PropTypes.string
};