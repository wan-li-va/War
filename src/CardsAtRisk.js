import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import PlayingCard from './PlayingCard';

const CardsAtRisk = props => {
    var list = props.loseList.map((card, index) => {
        return ( <PlayingCard curCard={card} /> )
    })
    return (
        <div className="CardsAtRisk"> {list} </div>
    )
}

export default CardsAtRisk;