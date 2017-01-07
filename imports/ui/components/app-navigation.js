//basic imports
import React from 'react';
import { Link } from 'react-router';
//components
import { PublicNavigation } from './public-navigation';
import { AuthenticatedNavigation } from './authenticated-navigation';


const styles = {
  AppNavigation: {
    color: "#ffffff",
  },
  titleLink: {
    textDecoration: "none",
    color: "#ffffff"
  },
}

export class AppNavigation extends React.Component {
  
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

  renderNavigation(hasUser, currentPath) {
    return hasUser ? <AuthenticatedNavigation currentPath={currentPath} /> : <PublicNavigation currentPath={currentPath} />;
  }

  render() {
    return <div>
      
    </div>
  }
}


AppNavigation.propTypes = {
  hasUser: React.PropTypes.object,
  currentPath: React.PropTypes.string
};


