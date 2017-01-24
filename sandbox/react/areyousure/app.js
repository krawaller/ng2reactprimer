import React from 'react';

import {Confirm} from './confirm';

export const App = React.createClass({
  getInitialState(){
    return {name:'', field: ''};
  },
  submitName(){
    this.setState({
      name: this.state.field,
      field: ''
    });
  },
  updateField(e){
    this.setState({field: e.target.value});
  },
  render(){
    return (
      <div>
        <h4>Enter your name</h4>
        <input value={this.state.field} onChange={this.updateField} />
        <Confirm
          disabled={!this.state.field}
          callback={this.submitName}/>
        <hr/>
        Submitted name: {this.state.name}
      </div>
    );
  }
});