import React from 'react';
import { StyleSheet, css } from 'aphrodite';
//import { CardMedia, CardTitle, CardHeader, Card, CardText, CardActions } from 'material-ui/Card'
import { DashboardContainer, Avatar } from '../../common'
import { Card, Row, Col, Button, Icon, Menu, Dropdown, message } from 'antd';
import { formatDate } from '../../../../modules/helpers'

const styles = StyleSheet.create({
  numberAttendingTitle: {
    color: '#666',
    fontWeight: 300
  },
  numberAttendingSubtitle: {
    fontSize: 11,
    fontWeight: 400
  }
});

const eventsToSeed = [
        {
          id: 1,
          title: 'Quickbooks 101',
          moreInfo: 'https://www.google.com',
          date: '1/5/17',
          time: '1PM - 5PM',
          location: '15 Dorsal Road Field House',
          numberAttending: 21,
          cost: 'free',
          image: 'http://www.cameraitacina.com/sites/default/files/603029284003342451.jpg',
          description: "QuickBooks is Intuit Inc's set of software solutions designed to manage payroll, inventory, sales and other needs of a small business. The software's features include marketing tools, merchant services, product and supplies, training solutions.",
          eventTypes: ['workshop'],
        },
        {
          id: 2,
          title: 'From $1 to $1M',
          moreInfo: 'https://www.google.com',
          date: '1/25/17',
          location: 'University E-Center: Room 102',
          time: '1PM - 5PM',
          numberAttending: 12,
          cost: 'free',
          image: 'https://c.ymcdn.com/sites/arcsa.site-ym.com/resource/resmgr/Images/duncan_workshop.JPG',
          description: "QuickBooks is Intuit Inc's set of software solutions designed to manage payroll, inventory, sales and other needs of a small business. The software's features include marketing tools, merchant services, product and supplies, training solutions.",
          eventTypes: ['workshop'],
        },
        {
          id: 3,
          title: 'Startup Teams 101',
          moreInfo: 'https://www.google.com',
          date: '1/29/17',
          time: '1PM - 5PM',
          location: '15 Dorsal Road Field House',
          numberAttending: 46,
          cost: 'free',
          image: 'http://eventpro.com.vn/wp-content/uploads/2013/06/event-flooring-051.jpg',
          description: "QuickBooks is Intuit Inc's set of software solutions designed to manage payroll, inventory, sales and other needs of a small business. The software's features include marketing tools, merchant services, product and supplies, training solutions.",
          eventTypes: ['workshop'],
        },
/*        {
          id: 4,
          title: 'Quickbooks 101',
          moreInfo: 'https://www.google.com',
          date: '1/5/17',
          time: '1PM - 5PM',
          location: '15 Dorsal Road Field House',
          numberAttending: 21,
          cost: 'free',
          image: 'http://www.cameraitacina.com/sites/default/files/603029284003342451.jpg',
          description: "QuickBooks is Intuit Inc's set of software solutions designed to manage payroll, inventory, sales and other needs of a small business. The software's features include marketing tools, merchant services, product and supplies, training solutions.",
          eventTypes: ['workshop'],
        },
        {
          id: 5,
          title: 'From $1 to $1M',
          moreInfo: 'https://www.google.com',
          date: '1/25/17',
          location: 'University E-Center: Room 102',
          time: '1PM - 5PM',
          numberAttending: 12,
          cost: 'free',
          image: 'https://c.ymcdn.com/sites/arcsa.site-ym.com/resource/resmgr/Images/duncan_workshop.JPG',
          description: "QuickBooks is Intuit Inc's set of software solutions designed to manage payroll, inventory, sales and other needs of a small business. The software's features include marketing tools, merchant services, product and supplies, training solutions.",
          eventTypes: ['workshop'],
        },
        {
          id: 6,
          title: 'Startup Teams 101',
          moreInfo: 'https://www.google.com',
          date: '1/29/17',
          time: '1PM - 5PM',
          location: '15 Dorsal Road Field House',
          numberAttending: 46,
          cost: 'free',
          image: 'http://eventpro.com.vn/wp-content/uploads/2013/06/event-flooring-051.jpg',
          description: "QuickBooks is Intuit Inc's set of software solutions designed to manage payroll, inventory, sales and other needs of a small business. The software's features include marketing tools, merchant services, product and supplies, training solutions.",
          eventTypes: ['workshop'],
        },*/
    ]

const { numberAttendingTitle, numberAttendingSubtitle } = styles


const PeopleAttending = ({item}) => {
  return (
    <h4 className={css(numberAttendingTitle)}>
      {item.numberAttending} attending
    </h4>
  );
}

const IconRow = ({item}) => {
  return (
    <div className='row middle-xs center-xs' style={{height: 70}}>
      <div className='col-xs-4'>
        <div className='box'>
        <h4 className={css(numberAttendingTitle)}>{formatDate(item.date)}</h4>
        </div>
      </div>
      <div className='col-xs-4'>
        <div className='box'>
        <h4 className={css(numberAttendingTitle)}>{item.time}</h4>
        </div>
      </div>
      <div className='col-xs-4'>
        <div className='box'>
          <PeopleAttending item={item} />
        </div>
      </div>
    </div>
  );
}


/*const MyMenu = ({event}) => {
  return (
    <Menu>
      <Menu.Item key="0" onClick={()=> Meteor.call('Events.attendEvent', event._id)}>
        <a href="#" >Attend Event</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="#">Share</a>
      </Menu.Item>
      <Menu.Item>
        <a href="#">View Event Page</a>
      </Menu.Item>
    </Menu>
  );
}*/

const subMenuSelect = (event, key) => {

  if (key === 'attend') {
    Meteor.call('Events.attendEvent', event._id, function(error, response){
      if (error) { message.error(error.reason); return; }
      message.success("you've been added to this event!")
    });
  }
  
}

const menu = (event) => (
    <Menu onSelect={(e)=> subMenuSelect(event, e.key)}>
      <Menu.Item key="attend">
        Attend Event
      </Menu.Item>
      <Menu.Item key="1">
        <a href="#">Share</a>
      </Menu.Item>
      <Menu.Item>
        <a href="#">View Event Page</a>
      </Menu.Item>
    </Menu>
  );

const NewsCard = ({item}) => (
  <Card bodyStyle={{padding: '5px 10px'}} style={{borderRadius: 8, marginTop: 15, height: 200}} >
    <Row>
      <Dropdown overlay={menu(item)} trigger={['click']}>
         <Icon type="ellipsis" style={{float: 'right', marginRight: 5, fontSize: 26}}/>
      </Dropdown>
    </Row>
    <Row>
      <h2>{item.title}</h2>
      <p>{item.location}</p>
      <IconRow item={item} />
      <div style={{textAlgin: 'left', width: '100%'}}>
        {item.users && item.users.map(function(user){
          return <Avatar key={user._id} src={user.profile.avatar} size={30} display={'inline-block'} />
        })}
      </div>
    </Row>
  </Card>
);

const EventsFeed = ({events}) => (
  <Row gutter={20}>
    {events && events.length > 0 ? events.map(item => {
      return <Col key={item._id} span={8}>
                <NewsCard item={item} />
              </Col>
    }) : null}
  </Row>
);

export const StudentEvents = ({events}) => (
  	<DashboardContainer pageTitle={'Student Events'}>
      <EventsFeed events={events} />
  	</DashboardContainer>
);
