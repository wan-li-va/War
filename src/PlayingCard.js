import React from 'react';
import Card from 'react-bootstrap/Card'

const PlayingCard = props => {
    return (
        <div className="Card">
        <Card>
            <Card.Body>
                <Card.Text>
                        <em>{props.curCard.name}</em>
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    )
}

export default PlayingCard;
