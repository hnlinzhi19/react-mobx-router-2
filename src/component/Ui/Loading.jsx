import React from 'react';
import {Spin} from 'antd';

export default class Loading extends React.Component {
  render(){
    return (
      <div className="loading-router">
        <Spin />
      </div>
    )
  }
}