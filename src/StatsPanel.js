import React from 'react';

const StatsPanel = props => {

    return (
        <div className="StatsPanel">
            {props.firstGame ?
                <p>Hi {props.displayName}! You have yet to play a game.</p> :
                <p>Hi {props.displayName}! Your Win Percentage is {Math.floor(props.wins / props.totalGames * 100)}% </p>
            }
        </div>
    )
}

export default StatsPanel;