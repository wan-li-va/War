import React, { Component } from 'react';
import Cards from './Cards.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      // cards: [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 
      //   8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13]
    }
  }

  componentWillMount = () => {
    let deck = [];
    let deckIndex = 0;
    for(let i = 13; i > 0; i--) {
      let commonName = i;
      let cardValue = i;
      if(i === 1) { commonName = "Ace"; cardValue = 14}
      if(i === 11) {commonName = "Jack"}
      if(i === 12) {commonName = "Queen"}
      if(i === 13) {commonName = "King"}

      deck[deckIndex] = {
        value: cardValue,
        name: commonName + " of Diamonds",
        index: deckIndex
      }
      deckIndex++;
      deck[deckIndex] = {
        value: cardValue,
        name: commonName + " of Clubs",
        index: deckIndex
      }
      deckIndex++;
      deck[deckIndex] = {
        value: cardValue,
        name: commonName + " of Hearts",
        index: deckIndex
      }
      deckIndex++;
      deck[deckIndex] = {
        value: cardValue,
        name: commonName + " of Spades",
        index: deckIndex
      }
      deckIndex++;
    }
    // this.setState({ cards: deck })

    // this.shuffleDeck();
    var shuffle = [...deck];
    // console.log(shuffle)
    for(let i = (shuffle.length-1); i > 0; i--){
      const j = Math.floor(Math.random() * i)
      const temp = shuffle[i]
      shuffle[i] = shuffle[j]
      shuffle[j] = temp
    }
    this.setState({ cards: shuffle })
  }

  restart = () => {
    var shuffle = [...this.state.cards];
    // console.log(shuffle)
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
        <Cards 
        cards={this.state.cards}
        restart={this.restart} />
      </div>
    );
  }
}