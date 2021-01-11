import React, { Component } from 'react';
import Message from './Message';

class Home extends Component {
  render() {
    return (
      <div>
        <Message>
          <h1>THIS IS THE HOME PAGE!</h1>
        </Message>
        <Message>
          <h2>Our History</h2>
        </Message>
        <Message>
          <h2>Mission Statement</h2>
        </Message>
      </div>
    )
  }
}

export default Home;