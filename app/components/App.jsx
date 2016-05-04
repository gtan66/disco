import React from 'react';
import api from '../api';

export default class App extends React.Component {
  onChange(e) {
  }

  render() {
    return (
      <div>
      <input onChange={this.onChange}/>
      </div>
    );
  }
}
