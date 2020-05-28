import React from 'react';

const StatsPanel = props => {

    return (
        <div className="StatsPanel">
            {props.firstGame ?
                <p>Win Percentage: N/A</p> :
                <p>Win Percentage: {Math.floor(props.wins / props.totalGames * 100)}% </p>
            }
        </div>
    )
}

export default StatsPanel;