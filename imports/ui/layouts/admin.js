import React from 'react';
import AppNavigation from '../containers/app-navigation';
import { browserHistory } from 'react-router';


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
