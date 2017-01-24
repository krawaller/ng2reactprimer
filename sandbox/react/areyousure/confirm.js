import React from 'react';

export const Confirm = React.createClass({
  propTypes: {
    callback: React.PropTypes.func.isRequired,
    disabled: React.PropTypes.bool
  },
  getInitialState() {
    return { confirming: false };
  },
  maybe(){
    this.setState({confirming: true});
  },
  nope(){
    this.setState({confirming: false});
  },
  launch(){
    this.props.callback();
    this.setState({confirming: false});
  },
  componentWillReceiveProps(nextProps){
    if (nextProps.disabled && this.state.confirming){
      this.setState({confirming: false});
    }
  },
  render(){
    if (this.state.confirming){
      return <span>
        <button onClick={this.nope}>Cancel</button>
        <button
          disabled={this.props.disabled}
          onClick={this.launch}>Confirm</button>
      </span>
    } else {
      return <button
        disabled={this.props.disabled}
        onClick={this.maybe}>Submit</button>
    }
  }
});