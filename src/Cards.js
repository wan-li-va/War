import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import CardsAtRisk from './CardsAtRisk.js';
import PlayingCard from './PlayingCard.js';
import StatsPanel from './StatsPanel.js';
import './Cards.css'
import firebase from './FirebaseConfig.js'

export default class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // myCards: this.props.cards.slice(0, 26),
            // otherCards: this.props.cards.slice(26, 53),
            otherCards: this.props.cards.slice(0, 1),
            myCards: this.props.cards.slice(1, 53),
            myCard: "",
            otherCard: "",
            isPlay: true,
            isNext: false,
            myLoseList: [],
            otherLoseList: [],
            result: "",
            wins: 0,
            totalGames: 0,
            firstGame: true,
            database: firebase.database(),
        }
    }

    componentDidMount = () => {
        this.state.database.ref('wins').once('value', snapshot => {
            if (snapshot && snapshot.exists()) {
                this.setState({ wins: snapshot.val() })
            }
        })
        this.state.database.ref('totalGames').once('value', snapshot => {
            if (snapshot && snapshot.exists()) {
                this.setState({ totalGames: snapshot.val(), firstGame: false })
            }
        })
    }

    play = () => {
        var myCurCard = this.state.myCards[0];
        var otherCurCard = this.state.otherCards[0];
        this.setState({
            myCard: myCurCard,
            otherCard: otherCurCard,
            myLoseList: [myCurCard],
            otherLoseList: [otherCurCard],
            myCards: this.state.myCards.slice(1, this.state.myCards.length),
            otherCards: this.state.otherCards.slice(1, this.state.otherCards.length),
            isPlay: false,
            isNext: true,
        })
    }

    next = () => {
        let winList;
        let myDeckLength = this.state.myCards.length;
        let otherDeckLength = this.state.otherCards.length;
        if (this.state.myCard.value !== this.state.otherCard.value) {
            if (this.state.myCard.value > this.state.otherCard.value) {
                winList = ([...this.state.myCards].concat(this.state.myLoseList)).concat(this.state.otherLoseList);
                myDeckLength = winList.length;
                this.setState({
                    myCards: winList,
                })
            }
            else {//if (this.state.myCard.value < this.state.otherCard.value) {
                winList = ([...this.state.otherCards].concat(this.state.otherLoseList)).concat(this.state.myLoseList);
                otherDeckLength = winList.length;
                this.setState({
                    otherCards: winList,
                })
            }
            this.setState({
                isPlay: true,
                isNext: false,
                myLoseList: [],
                otherLoseList: [],
            })
        }
        else {
            if (this.state.myCards.length < 4) { this.end("lose"); }
            else if (this.state.otherCards.length < 4) { this.end("win"); }
            else {
                var myCurCard = this.state.myCards[3];
                var otherCurCard = this.state.otherCards[3];
                var myCurCards = [...this.state.myCards];
                var otherCurCards = [...this.state.otherCards];
                this.setState({
                    myCard: myCurCard,
                    otherCard: otherCurCard,
                    myLoseList: [...this.state.myLoseList].concat(myCurCards.slice(0, 4)),
                    otherLoseList: [...this.state.otherLoseList].concat(otherCurCards.slice(0, 4)),
                    myCards: this.state.myCards.slice(4, myCurCards.length),
                    otherCards: this.state.otherCards.slice(4, otherCurCards.length),
                })
            }
        }
        if (myDeckLength === 0) { this.end("lose") }
        if (otherDeckLength === 0) { this.end("win") }
    }

    end = result => {
        let message;
        var newWins = this.state.wins + 1;
        var newGames = this.state.totalGames + 1;
        if (result === "win") {
            message = "Congratulations, you won the war!";
            this.setState({ wins: newWins, totalGames: newGames })
        }
        else {
            message = "Sorry, you lost the war :(";
            this.setState({ totalGames: this.state.totalGames + 1 })
        }
        this.setState({
            result: message,
            isNext: true,
            isPlay: true,
            firstGame: false,
        })
        this.state.database.ref('wins').set(newWins)
        this.state.database.ref('totalGames').set(newGames)
    }

    restart = () => {
        this.props.restart();
        this.setState({
            myCards: this.props.cards.slice(0, 26),
            otherCards: this.props.cards.slice(26, 53),
            myCard: "",
            otherCard: "",
            isPlay: true,
            isNext: false,
            myLoseList: [],
            otherLoseList: [],
            result: "",
            firstGame: false,
            totalGames: this.state.totalGames + 1,
        })
        var newGames = this.state.totalGames + 1;
        this.state.database.ref('totalGames').set(newGames)
    }

    render() {
        return (
            <div>
                <div className="buttons">
                    <Button onClick={this.play} disabled={this.state.isNext}>play</Button>
                    <Button onClick={this.next} disabled={this.state.isPlay}>next</Button>
                    <Button onClick={this.restart}>restart</Button>
                </div>
                <StatsPanel
                    wins={this.state.wins}
                    totalGames={this.state.totalGames}
                    firstGame={this.state.firstGame} />
                <div className="Cards">
                    <p className="numCards"> Number of Cards in My Deck: {this.state.myCards.length}</p>
                    <div className="CurrentCard">
                        <p>My Current Card</p>
                        <PlayingCard className="CurPlayingCard"
                            curCard={this.state.myCard} />
                    </div>
                    <div className="CurrentCard">
                        <p>Opponent's Current Card</p>
                        <PlayingCard className="CurPlayingCard"
                            curCard={this.state.otherCard} />
                    </div>
                    <p className="numCards">Number of Cards in Opponent's Deck: {this.state.otherCards.length}</p>
                </div>
                <div className="Risk">
                    <div className="atRisk">
                        <p>My Cards at Risk</p>
                        <CardsAtRisk loseList={this.state.myLoseList} />
                    </div>
                    <div className="atRisk">
                        <p>Opponent's Cards at Risk</p>
                        <CardsAtRisk loseList={this.state.otherLoseList} />
                    </div>
                </div>
                <p>{this.state.result}</p>
            </div>
        )
    }
}