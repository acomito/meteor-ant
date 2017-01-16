import React from 'react';
import { Link } from 'react-router';
import { appConfig } from '../../modules/config';
const { appName, defaultAvatar } = appConfig;

import { Menu, Input, BackTop, Form, Icon, Row, Col, notification, Button, Card, Anchor } from 'antd';
const FormItem = Form.Item;


const HorizontalLoginForm = Form.create()(React.createClass({
  handleSubmit(e) {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.form.resetFields();
         notification.success({
        message: 'Successfully signed up!',
        description: 'You have been added to our mailing list. Thanks!',
      });
      }
    });
  },
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form inline onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <Input type="email" placeholder="Email Address" style={{ borderTopRightRadius: '0px', borderBottomRightRadius: '0px', background: '#eee', border: 0, width: 230, paddingTop: 18, paddingBottom: 18}}/>
          )}
        </FormItem>
        <FormItem>
          <Button 
            style={{cursor: 'pointer', position: 'relative', left: '-10px', fontSize: 13, border: 'none', color: '#fff', backgroundColor: '#75ba50', textTransform: 'uppercase', fontWeight: 300, padding: '8px 23px',  borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px'}}
            htmlType="submit">
            Submit
         </Button>
        </FormItem>
      </Form>
    );
  },
}));
const styles = {
  raisedButtons: {
    width: "300px",
    margin: "30px 10px 10px 10px"
  },
  header: {
    fontSize: 22,
    textSizeAdjust: '100%',
  },
  darkFont: {
    color: '#da5347', fontSize: 27, fontWeight: 500
  }
}

const { header, darkFont } = styles



const Jumbotron = () => {
  return (
    <Row type="flex" justify="space-around" align="middle" style={{height: 520, background: '#fff'}}>
      <div style={{textAlign: 'center'}}>
          <h1 style={{marginBottom: 20, fontSize: 29, color: '#000'}}>Helping universities create more entrepreneurial students.</h1>
          <p style={{marginBottom: 20, fontSize: 16, color: '#aaa'}}>{appName} gives universities a turn-key social platform that connects students with <br /> resources, information and opportunities to start their own businesses.</p>
          <Link to='/signup'>
          <Button 
            type='primary' 
            style={{marginRight: 25, backgroundColor: '#75ba50', textTransform: 'uppercase', border: 'none', marginTop: 30, padding: '10px 23px', color: '#fff'}}
          >
            TRY THE DEMO
          </Button>
        </Link>
          <a href='#more-info'>
            <Button 
              type='default' 
              style={{textTransform: 'uppercase', border: '1px solid #888888', marginTop: 30, padding: '10px 23px', color: '#888888'}}
            >
              LEARN MORE
            </Button>
          </a>
        </div>
      </Row>
  );
}

const studentsGetCards = [
  {
    id: 1,
    image: defaultAvatar,
    title: 'Individualized Student Dashboard',
    text: 'Students get their own account, profile and dashboard. Students can quickly search through resources, explore opportunities, and connect with other students starting businesses.',
  },
  {
    id: 5,
    title: 'Commuity Resource Search ',
    image: defaultAvatar,
    text: "There are many programs and services avialable to students. These can be delieverd by your univesrity, non-profits, or state & local governments. Admins can invite these different organizations to create profiles which are made easily searchable for students.",
  },
  {
    id: 4,
    title: 'Email & Text Notifications',
    image: defaultAvatar,
    text: 'Students can receive text or email notifications based on their individual interestes, business needs and background. When a new event, resource or advisor is added to your platform, custom alerts are be sent to relevant students.',
  },
  {
    id: 15,
    title: 'Contests, Incentives & More',
    image: defaultAvatar,
    text: "There are many programs and services avialable to students. These can be delieverd by your univesrity, non-profits, or state & local governments. Admins can invite these different organizations to create profiles which are made easily searchable for students.",
  },
  {
    id: 2,
    title: 'Events & Workshops',
    image: defaultAvatar,
    text: "The university's administrator account gives complete control over which outside entities can access your platform (e.g. departments, advisors, mentors, local banks,  and so on). From there you can invite and manage users, analyze data, and post updates.",
  },
  {
    id: 3,
    title: 'Advisor Search',
    image: defaultAvatar,
    text: 'Universities can invite interested local entreprenuers and community members to advise student entrepreneurs. Students can then search through your advisor database, see their past work history and skills, know if they are available to advise, as well as direct message advisors.',
  },
  
  
  
]

const howCards = [
  {
    id: 1,
    title: 'Turn-key Social Platform',
    image: defaultAvatar,
    text: "Your univesrity and community are full of resources, programs and events that can help student entreprenuers. Why force students to hunt them down. Provide students, university employees and community members a one-stop-shop web app to connect, collaborate and more.",
  },
  {
    id: 2,
    title: 'Master Accounts',
    image: defaultAvatar,
    text: "The university's administrator account gives complete control over which outside entities can access your platform (e.g. departments, advisors, mentors, local banks,  and so on). From there you can invite and manage users, analyze data, and post updates.",
  },
  {
    id: 3,
    title: "Your School's Brand",
    image: defaultAvatar,
    text: "The platform is fully customizable to your university's brand. You decide on color theme, wording and the URL where users access the app.",
  },
  {
    id: 4,
    title: "You Own Your Data",
    image: defaultAvatar,
    text: "The data in your app is owned by you, and you can export it at any time. See the types of business students are interested in. Learn what resources are available to find if you're supplying in-demand programs and services.",
  },
  {
    id: 6,
    title: 'Community & School Resources',
    image: defaultAvatar,
    text: "There are many programs and services avialable to students. These can be delieverd by your univesrity, non-profits, or state & local governments. Admins can invite these different organizations to create profiles which are made easily searchable for students.",
  },
  {
    id: 5,
    title: 'Advisor Accounts',
    image: defaultAvatar,
    text: 'Universities can invite interested local entreprenuers and community members to advise student entrepreneurs. Students can then search through your advisor database, see their past work history and skills, know if they are available to advise, as well as direct message advisors.',
  },
  
  
]

const HowCard = ({item}) => {
  return (
    <Card style={{margin: 'auto', borderRadius: 8, height: 250, width: 350, marginBottom: 10, textAlign: 'center'}}>
      <img src={item.image} style={{height: 80, width: 80}} />
      <h2>{item.title}</h2>
      <p>{item.text}</p>
    </Card>
  );
}

const WhatUniversitiesGet = () => {
  return (
    <Row id='more-info' type="flex" justify="center" align="middle" style={{background: '#fafafa', paddingBottom: 50, paddingTop: 60, minHeight: 500}} >
      <div style={{width: '80%', margin: 'auto'}}>
        <h1 style={{marginBottom: 40, textAlign: 'center', width: '100%'}}>What Universities Get</h1>
        <Row gutter={6} type="flex" justify="space-around" align="middle" >
          {howCards && howCards.map(item => <Col key={item.id} span={12}> <HowCard item={item} /> </Col> )}
        </Row>
      </div>
    </Row>
  );
}

const WhatStudentsGet = () => {
  return (
    <Row id='more-info' type="flex" justify="center" align="middle" style={{background: '#fafafa', paddingBottom: 50, paddingTop: 60, minHeight: 500}} >
      <div style={{width: '80%', margin: 'auto'}}>
        <h1 style={{marginBottom: 40, textAlign: 'center', width: '100%'}}>What Students Get</h1>
        <Row gutter={6} type="flex" justify="space-around" align="middle" >
          {studentsGetCards && studentsGetCards.map(item => <Col key={item.id} span={12}> <HowCard item={item} /> </Col> )}
        </Row>
      </div>
    </Row>
  );
}


const NewRows = () => {
  return (
    <Row>
      <Col span='12'>
        <WhatUniversitiesGet />
      </Col>
      <Col span='12'>
        <WhatStudentsGet />
      </Col>
    </Row>
  );
}

const HowItWorks = () => {
  return (
    <Row gutter={100} style={{paddingRight: '150px', paddingLeft: '150px', background: '#fafafa', height: 450}} type="flex" justify="space-around" align="middle">
      {/*<h1 style={{textAlign: 'center', fontWeight: 300, color: '#000', margin: 0}}>Make it easy for every student to connect with the entreprenuerial <br />resources, people and places that exist at your school.</h1>*/}
      <Col span={8}>
        <div style={{textAlign: 'center'}}>
          <Icon type="rocket" style={{fontSize: 58, marginBottom: 15, color: '#1b9edb'}}/>
          <h1 style={{margin: 0, color: '#000', fontSize: 16, fontWeight: 500}}>University Launches App</h1>
          <p style={{marginBottom: 20, fontSize: 13, color: '#888'}}>University deploys a customized startupNOW platform at their universities</p>
        </div>
      </Col>
      <Col span='8'>
        <div style={{textAlign: 'center'}}>
          <Icon type="rocket" color="#da5347" style={{fontSize: 58, marginBottom: 15}}/>
          <h1 style={{margin: 0, color: '#000', fontSize: 16, fontWeight: 500}}>Invite Business Community</h1>
          <p style={{marginBottom: 20, fontSize: 13, color: '#888'}}>University admins can invite the local business community to join the platoform: advisors, services, lenders, angels and VCs.</p>
        </div>  
      </Col>
      <Col span='8'>
        <div style={{textAlign: 'center'}}>
          <Icon type="rocket" color="#000" style={{fontSize: 58, marginBottom: 15}}/>
          <h1 style={{margin: 0, color: '#000', fontSize: 16, fontWeight: 500}}>Invite Students to Your Platform</h1>
          <p style={{marginBottom: 20, fontSize: 13, color: '#888'}}>Students can quickly and easily sign up, add information about their business, and find relevant services, programs and events to help them grow their businesses.</p>
        </div>
      </Col>
      
    </Row>
  );
}

const Organizing = () => {
  return (
    <Row gutter={80} style={{paddingRight: 60, paddingLeft: 60, background: '#fafafa', color: '#fff', height: 450}} type="flex" justify="space-around" align="middle">
      <h1>Make it easy for every student to connect with the entreprenuerial resources, people and places that exist at your school.</h1>
      <Col span={8}>
        <div style={{textAlign: 'center'}}>
          <h1 style={{margin: 0, color: '#000', fontSize: 16, fontWeight: 500}}>University Launches App</h1>
          <p style={{marginBottom: 20, fontSize: 13, color: '#888'}}>University deploys a customized startupNOW platform at their universities</p>
        </div>
      </Col>
      <Col span='8'>
        <div style={{textAlign: 'center'}}>
          <h1 style={{margin: 0, color: '#000', fontSize: 16, fontWeight: 500}}>Invite Business Community</h1>
          <p style={{marginBottom: 20, fontSize: 13, color: '#888'}}>University admins can invite the local business community to join the platoform: advisors, services, lenders, angels and VCs.</p>
        </div>  
      </Col>
      <Col span='8'>
        <div style={{textAlign: 'center'}}>
          <h1 style={{margin: 0, color: '#000', fontSize: 16, fontWeight: 500}}>Invite Students to Your Platform</h1>
          <p style={{marginBottom: 20, fontSize: 13, color: '#888'}}>Students can quickly and easily sign up, add information about their business, and find relevant services, programs and events to help them grow their businesses.</p>
        </div>
      </Col>
      
    </Row>
  );
}



//
const Demo = () => {
  return (
    <Row style={{background: '#1b9edb', color: '#fff', height: 293}} type="flex" justify="space-around" align="middle">
      <div style={{textAlign: 'center'}}>
        <Icon type="rocket" color="#fff" style={{fontSize: 56, marginBottom: 12}}/>
        <h3 style={header}>Want to see StartupNow in action?</h3>
        <p style={{color: '#b3e0f6', fontSize: 18 }}>We've made an example app available for you to explore</p>
        <Link to='/signup'>
          <Button style={{border: 'none', marginTop: 20, padding: '10px 23px', color: '#1b9edb'}}>TAKE ME THERE</Button>
        </Link>
      </div>
    </Row>
  );
}

const NewsLetter = () => {
  return (
    <Row type="flex" justify="space-around" align="middle" style={{height: 260}}>
      <div style={{textAlign: 'center'}} id='API'>
        <h1 style={{margin: 0, color: '#da5347', fontSize: 26, fontWeight: 500}}>Always stay up to date!</h1>
        <p style={{marginBottom: 20, fontSize: 15, color: '#888'}}>Join The Digest and get weekly updates of the latest {appName} <br /> news straight to your inbox.</p>
        <HorizontalLoginForm />
        <p style={{marginTop: 13, fontSize: 11, color: '#aaa'}}>NO SPAM. UNSUBSCRIBE ANY TIME.</p>
      </div>
    </Row>
  );
}






export const Index = () => (
    <div>
    <Jumbotron />
    <NewRows />
    <Demo />
{/*    <WhatUniversitiesGet />
    <Demo />
    <WhatStudentsGet />
    <Demo />*/}
    <NewsLetter />
    <BackTop />
  </div>
);

