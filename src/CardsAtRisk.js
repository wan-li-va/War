import React from 'react';
import PlayingCard from './PlayingCard';

const CardsAtRisk = props => {
    var list = props.loseList.map((card, index) => {
        return ( <PlayingCard className="riskCard" curCard={card} /> )
    })
    return (
        <div className="CardsAtRisk"> {list} </div>
    )
}

export default CardsAtRisk;