import React from 'react';

export class App extends React.Component {
  constructor(){
    super();
    this.state = { beer: 3 };
    this.getMoreBeer = this.getMoreBeer.bind(this);
  }
  getMoreBeer(){
    this.setState({
      beer: this.state.beer + 1
    });
  }
  render(){
    return (
      <div>
        We have {this.state.beer} bottles of beer.
        {' '}<button onClick={this.getMoreBeer}>Get more</button>
      </div>
    );
  }
}
