import React, { Component } from 'react';
import Cards from './Cards.js';
import StatsPanel from './StatsPanel.js';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 
        8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13]
    }
  }

  componentWillMount = () => {
    var shuffle = [...this.state.cards];
    for(let i = (shuffle.length-1); i > 0; i--){
      const j = Math.floor(Math.random() * i)
      const temp = shuffle[i]
      shuffle[i] = shuffle[j]
      shuffle[j] = temp
    }
    this.setState({ cards: shuffle })
  }
  render() {
    return (
      <div className="App">
        <h1>Welcome to War</h1>
        <Cards cards={this.state.cards}/>
        <StatsPanel />
      </div>
    );
  }
}