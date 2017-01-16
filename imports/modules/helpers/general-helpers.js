import React from 'react';
import { Link, browserHistory } from 'react-router';
import { Form, Row, Col, Icon, Input, Card, Button, Checkbox } from 'antd';

 export const getIcon = (item) => {
  switch(item.resourceItemType) {
    case 'financing':
      return <Icon type="line-chart" style={{ fontSize: '28px' }} />
    case 'competition':
      return <Icon type="bulb" style={{ fontSize: '28px' }} /> //<ActionDateRange color={primary1Color} />
    case 'incentive':
      return <Icon type="heart-o" style={{ fontSize: '28px' }} />
    case 'service':
      return <Icon type="solution" style={{ fontSize: '28px' }} /> 
    case 'resourceOrgAdded':
      return <Icon type="solution" style={{ fontSize: '28px' }} /> 
  }
 }

  export const getOrgIcon = (item, size) => {
    let fontSize = size || 28;
    switch(item.orgType) {
      case 'university department':
        return <Icon type="book" style={{ fontSize: fontSize }} />
      default:
        return <Icon type="book" style={{ fontSize: fontSize }} />
    }
 }