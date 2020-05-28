import React, { Component } from 'react';
import Cards from './Cards.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from './FirebaseConfig.js';
import Button from 'react-bootstrap/Button';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      database: firebase.database(),
      // cards: [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 
      //   8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13]
    }
  }

  componentWillMount = () => {
    // const firebaseAppAuth = firebase.auth();
    let deck = [];
    let deckIndex = 0;
    for (let i = 13; i > 0; i--) {
      let commonName = i;
      let cardValue = i;
      if (i === 1) { commonName = "Ace"; cardValue = 14 }
      if (i === 11) { commonName = "Jack" }
      if (i === 12) { commonName = "Queen" }
      if (i === 13) { commonName = "King" }

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
    var shuffle = [...deck];
    for (let i = (shuffle.length - 1); i > 0; i--) {
      const j = Math.floor(Math.random() * i)
      const temp = shuffle[i]
      shuffle[i] = shuffle[j]
      shuffle[j] = temp
    }
    this.setState({ cards: shuffle })
  }

  restart = () => {
    var shuffle = [...this.state.cards];
    for (let i = (shuffle.length - 1); i > 0; i--) {
      const j = Math.floor(Math.random() * i)
      const temp = shuffle[i]
      shuffle[i] = shuffle[j]
      shuffle[j] = temp
    }
    this.setState({ cards: shuffle })
  }

  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;

    return (
      <div className="App">
        <h1>Welcome to War!</h1>
        {
          user
            ? <div></div>
            : <Button onClick={signInWithGoogle}>Sign in with Google</Button>
        }
        {
          user ?
          <Cards
          cards={this.state.cards}
          restart={this.restart}
          database={this.state.database}
          uid={user.uid} 
          displayName={user.displayName} 
          signOut={signOut}/>
          : <p>Please sign in.</p>
        }
      </div>
    );
  }
}