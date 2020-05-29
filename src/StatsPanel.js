import React from 'react';

const StatsPanel = props => {

    return (
        <div className="StatsPanel">
            {props.firstGame ?
                <h6>Hi {props.displayName}, you have yet to play a game.</h6> :
                <h6>Hi {props.displayName}, your win percentage is {Math.floor(props.wins / props.totalGames * 100)}% </h6>
            }
        </div>
    )
}

export default StatsPanel;