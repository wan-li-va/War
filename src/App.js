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
    }
  }

  componentWillMount = () => {
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
        <h1>A GAME OF LUCK: <span className="war">WAR</span></h1>
        {
          user
            ? <div></div>
            : <p className="signIn">Please sign in.</p>
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
          : <Button onClick={signInWithGoogle} className="signInButton">Sign in with Google</Button>
        }
      </div>
    );
  }
}