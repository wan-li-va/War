import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

export default class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myCards: [],
            otherCards: [],
            myCard: "",
            otherCard: "",
            isPlay: true,
            isNext: false,
            myLoseList: [],
            otherLoseList: [],
            result: "",
        }
    }

    componentDidMount = () => {
        this.setState({
            myCards: this.props.cards.slice(0, 26),
            otherCards: this.props.cards.slice(26, 53),
            myCard: "",
            otherCard: "",
            myLoseList: [],
            otherLoseList: [],
        })
    }

    play = () => {
        var myCurCard = this.state.myCards[0] //this.state.myLoseList.length];  // must set loseList to 0 after next
        var otherCurCard = this.state.otherCards[0] //this.state.otherLoseList.length];
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
        console.log(this.state)
        if (this.state.myCard > this.state.otherCard) {
            winList = ([...this.state.myCards].concat(this.state.myLoseList)).concat(this.state.otherLoseList);
            this.setState({
                myCards: winList,
                isPlay: true,
                isNext: false,
                myLoseList: [],
                otherLoseList: [],
            })
        }
        else if (this.state.myCard < this.state.otherCard) {
            winList = ([...this.state.otherCards].concat(this.state.otherLoseList)).concat(this.state.myLoseList);
            this.setState({
                otherCards: winList,
                isPlay: true,
                isNext: false,
                myLoseList: [],
                otherLoseList: [],
            })
        }
        else {
            if (this.state.myCards.length < 4) {
                this.end("lose");
            }
            else if (this.state.otherCards.length < 4) {
                this.end("win");
            }
            else {
                var myCurCard = this.state.myCards[3];
                var otherCurCard = this.state.otherCards[3];
                var myCurCards = [...this.state.myCards];
                var myLength = myCurCards.length;
                var otherCurCards = [...this.state.otherCards];
                var otherLength = otherCurCards.length;
                this.setState({
                    myCard: myCurCard,
                    otherCard: otherCurCard,
                    myLoseList: [...this.state.myLoseList].concat(myCurCards.slice(0, 4)),
                    otherLoseList: [...this.state.otherLoseList].concat(otherCurCards.slice(0, 4)),
                    myCards: this.state.myCards.slice(4, myLength),
                    otherCards: this.state.otherCards.slice(4, otherLength),
                    // isNext: false,
                    // isPlay: true,
                })
            }
        }
    }

    end = result => {
        if (result === "win") {
            this.setState({
                result: "win",
                isNext: false,
                isPlay: false
            })
        }
        else {
            this.setState({
                result: "lose",
                isNext: false,
                isPlay: false,
            })
        }
    }

    render() {
        return (
            <div>
                <div className="buttons">
                    <Button onClick={this.play} disabled={this.state.isNext}>play</Button>
                    <Button onClick={this.next} disabled={this.state.isPlay}>next</Button>
                </div>
                <div className="Cards">
                    <div className="player">
                        <p>my # cards: {this.state.myCards.length}</p>
                        <p>myCard: {this.state.myCard}</p>
                    </div>
                    <div className="player">
                        <p>other # cards: {this.state.otherCards.length}</p>
                        <p>otherCard: {this.state.otherCard}</p>
                        <p>{this.state.result}</p>
                    </div>
                </div>
            </div>
        )
    }
}