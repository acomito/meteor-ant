import React from 'react';
import { Spin } from 'antd';

const styles = {
  divStyle: {
    marginLeft: "45%",
    marginTop: "25%",
  }
};

export const Loading = () => (
  <div style={styles.divStyle}>
    <Spin />
  </div>
);