//Base Packages/Functionality
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { App } from '../../ui/layouts/app';
import { Admin } from '../../ui/layouts/admin';
//Pages
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
//Students
import StudentLayout from '../../ui/layouts/student';
import { StudentProfilePage } from '../../ui/pages/student/student-profile';
import { StudentNewsPage } from '../../ui/pages/student/student-news';
import { StudentHomePage } from '../../ui/pages/student/student-home';
import { StudentSignupPage_One } from '../../ui/pages/student/student-signup-one';
import { StudentAdvisorsPage } from '../../ui/pages/student/student-advisors';
import { StudentPerksPage } from '../../ui/pages/student/student-perks';
import { StudentSettingsPage } from '../../ui/pages/student/student-settings';
import { StudentAdvisorsSinglePage } from '../../ui/pages/student/student-advisors-single';
import { StudentMessagesPage } from '../../ui/pages/student/student-messages';
import { StudentThreadPage } from '../../ui/pages/student/student-thread';
import { StudentEventsPage } from '../../ui/pages/student/student-events';
import { StudentBusinessesPage } from '../../ui/pages/student/student-businesses';
import { StudentResourcesPage } from '../../ui/pages/student/student-resources';
import { StudentStudentsPage } from '../../ui/pages/student/student-students';
import { StudentOrganizationsPage } from '../../ui/pages/student/student-organizations';
import { StudentOrganizationSinglePage } from '../../ui/pages/student/student-organization-single';
import { StudentStudentSinglePage } from '../../ui/pages/student/student-student-single';

//resourceOrg
import { ResourceOrgLayout } from '../../ui/layouts/resourceOrg';
import { ResourceOrgPage } from '../../ui/pages/resourceOrg/resource-org';
import { ResourceHomePage } from '../../ui/pages/resourceOrg/resource-home';
import { ResourceSignupPage } from '../../ui/pages/resourceOrg/resource-signup';
import { ResourceItemsPage } from '../../ui/pages/resourceOrg/resource-items';
import { ResourceEventsPage } from '../../ui/pages/resourceOrg/resource-events';

//Master
import { MasterLayout } from '../../ui/layouts/master';
import { MasterHomePage } from '../../ui/pages/master/master-home';
import { MasterNewsPage } from '../../ui/pages/master/master-news';
import { MasterAddNewsPage } from '../../ui/pages/master/master-add-news';
import { MasterStudentsPage } from '../../ui/pages/master/master-students';
import { MasterAdvisorsPage } from '../../ui/pages/master/master-advisors';

// Advisor
import { AdvisorLayout } from '../../ui/layouts/advisor';
import { AdvisorSignupPage } from '../../ui/pages/advisor/advisor-signup';
import { AdvisorHomePage } from '../../ui/pages/advisor/advisor-home';
import { AdvisorStudentsPage } from '../../ui/pages/advisor/advisor-students';
import enUS from 'antd/lib/locale-provider/en_US';
import { LocaleProvider } from 'antd'



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
    <LocaleProvider locale={enUS}>
    <Router history={ browserHistory }>




      <Route path="/" component={ App }>
        <IndexRoute name="index" component={ Index } />
        <Route name="login" path="/login" component={ Login } />
        <Route name="recover-password" path="/recover-password" component={ RecoverPassword } />
        <Route name="reset-password" path="/reset-password/:token" component={ ResetPassword } />
        <Route name="signup" path="/signup" component={ Signup } />
        <Route name="admin-login" path="/admin-login" component={ AdminLoginPage }  />
        <Route name="advisor-signup" path="/advisor-signup" component={ AdvisorSignupPage }  />
        <Route name="resource-signup" path="/resource-signup" component={ ResourceSignupPage }  />
        <Route name="student-signup-one" path="/student-signup/one" component={ StudentSignupPage_One }  />  
      </Route>
    
      <Route path="/resource" component={ ResourceOrgLayout }>       
        <Route name="resource-home" path="/resource/home" component={ ResourceHomePage } onEnter={ requireAuth }  />
        <Route name="resource-org" path="/resource/organization/:id" component={ ResourceOrgPage } onEnter={ requireAuth }  />
        <Route name="resource-items" path="/resource/items" component={ ResourceItemsPage } onEnter={ requireAuth }  />
        <Route name="resource-events" path="/resource/events" component={ ResourceEventsPage } onEnter={ requireAuth }  />
      </Route>

      <Route path="/student" component={ StudentLayout }>       
        <Route name="student-home" path="/student/home" component={ StudentNewsPage } onEnter={ requireAuth }  />
        <Route name="student-profile" path="/student/profile" component={ StudentProfilePage } onEnter={ requireAuth }  />
        <Route name="student-news" path="/student/news" component={ StudentNewsPage } onEnter={ requireAuth }  />
        <Route name="student-advisors" path="/student/advisors" component={ StudentAdvisorsPage } onEnter={ requireAuth }  />
        <Route name="student-perks" path="/student/perks" component={ StudentPerksPage } onEnter={ requireAuth }  />
        <Route name="student-settings" path="/student/settings" component={ StudentSettingsPage } onEnter={ requireAuth }  />
        <Route name="student-advisors-single" path="/student/advisors/:id" component={ StudentAdvisorsSinglePage } onEnter={ requireAuth }  />
        <Route name="student-messages" path="/student/messages" component={ StudentMessagesPage } onEnter={ requireAuth }  />
        <Route name="student-thread" path="/student/messages/:id" component={ StudentThreadPage } onEnter={ requireAuth }  />
        <Route name="student-events" path="/student/events" component={ StudentEventsPage } onEnter={ requireAuth }  />
        <Route name="student-businesses" path="/student/businesses" component={ StudentBusinessesPage } onEnter={ requireAuth }  />
        <Route name="student-resources" path="/student/resources" component={ StudentResourcesPage } onEnter={ requireAuth }  />
        <Route name="student-students" path="/student/students" component={ StudentStudentsPage } onEnter={ requireAuth }  />
        <Route name="student-organizations" path="/student/organizations" component={ StudentOrganizationsPage } onEnter={ requireAuth }  />
        <Route name="student-organizations-single" path="/student/organizations/:id" component={ StudentOrganizationSinglePage } onEnter={ requireAuth }  />
        <Route name="student-students-single" path="/student/students/:id" component={ StudentStudentSinglePage } onEnter={ requireAuth }  />
        
      </Route>




      <Route path="/master" component={ MasterLayout }>       
        <Route name="master-home" path="/master/home" component={ MasterHomePage } onEnter={ requireAuth }  />
        <Route name="master-news" path="/master/news" component={ MasterNewsPage } onEnter={ requireAuth }  />
        <Route name="master-add-news" path="/master/news/add" component={ MasterAddNewsPage } onEnter={ requireAuth }  />
        <Route name="master-students" path="/master/students" component={ MasterStudentsPage } onEnter={ requireAuth }  />
        <Route name="master-advisors" path="/master/advisors" component={ MasterAdvisorsPage } onEnter={ requireAuth }  />
      </Route>




      <Route path="/advisor" component={ AdvisorLayout }>       
        <Route name="advisor-home" path="/advisor/home" component={ AdvisorHomePage } onEnter={ requireAuth }  />
        <Route name="advisor-students" path="/advisor/students" component={ AdvisorStudentsPage } onEnter={ requireAuth }  />
      </Route>

      

      <Route path="/admin" component={ Admin }>
        <Route name="admin-home" path="/admin/home" component={ AdminHomePage } onEnter={ requireAuth } />
      </Route>



      <Route path="*" component={ NotFound } />

    </Router>
    </LocaleProvider>,
    document.getElementById('react-root')
  );
});

