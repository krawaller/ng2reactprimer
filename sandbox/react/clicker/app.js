import React from 'react';

export const App = React.createClass({
  getInitialState(){
    return { beer: 3 }
  },
  getMoreBeer(){
    this.setState({
      beer: this.state.beer + 1
    });
  },
  render(){
    return (
      <div>
        We have {this.state.beer} bottles of beer.
        {' '}<button onClick={this.getMoreBeer}>Get more</button>
      </div>
    );
  }
});
