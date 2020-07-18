import React, { Component } from 'react'
import { Button, Input } from 'reactstrap';
import { render } from '@testing-library/react';

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      message: "Unlike",
      type: "",
      count: 0

    }
    this.changeMessage = this.changeMessage.bind(this);
    //this.insertData = this.insertData.bind(this);

  }


  changeMessage() {
    this.setState({ message: "Like" })
    this.setState({count: this.state.count+1 })
  }

  render() {
    return (
      <div>
        <h2>ติดต่อเรา</h2>
    <Button onClick={this.changeMessage}>{this.state.message}{this.state.count}</Button>
      </div>
    )
  }
}