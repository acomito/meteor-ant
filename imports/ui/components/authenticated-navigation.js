import React from 'react';
import { browserHistory, Link } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { returnActiveLink } from '../../modules/active-helpers';




const styles = {
  navLink: {
    color: "#ffffff"
  }
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
        </div>
  }
  
}


AuthenticatedNavigation.propTypes = {
  hasUser: React.PropTypes.object,
  currentPath: React.PropTypes.string,
};
