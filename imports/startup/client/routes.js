//Base Packages/Functionality
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { App } from '../../ui/layouts/app';
import { Admin } from '../../ui/layouts/admin';
//Pages
import { Documents } from '../../ui/pages/documents';
import { Index } from '../../ui/pages/index';
import { Login } from '../../ui/pages/login';
import { NotFound } from '../../ui/pages/not-found';
import { RecoverPassword } from '../../ui/pages/recover-password';
import { ResetPassword } from '../../ui/pages/reset-password';
import { Signup } from '../../ui/pages/signup';
//Admin
import { AdminHomePage } from '../../ui/pages/admin/admin-home';
import { AdminLoginPage } from '../../ui/pages/admin/admin-login';
//Theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { muiTheme } from './theme';


const requireAuth = (nextState, replace) => {
  if (!Meteor.loggingIn() && !Meteor.userId()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
};

Meteor.startup(() => {
  render(
    <MuiThemeProvider muiTheme={muiTheme}>
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute name="index" component={ Index } />
        <Route name="documents" path="/documents" component={ Documents } onEnter={ requireAuth } />
        <Route name="login" path="/login" component={ Login } />
        <Route name="recover-password" path="/recover-password" component={ RecoverPassword } />
        <Route name="reset-password" path="/reset-password/:token" component={ ResetPassword } />
        <Route name="signup" path="/signup" component={ Signup } />
        <Route name="admin-login" path="/admin-login" component={ AdminLoginPage }  />
      </Route>

      <Route path="/admin" component={ Admin }>
        <Route name="admin-home" path="/admin/home" component={ AdminHomePage } onEnter={ requireAuth } />
      </Route>

      <Route path="*" component={ NotFound } />
    </Router>
    </MuiThemeProvider>,
    document.getElementById('react-root')
  );
});
