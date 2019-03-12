import React from 'react';
import { Card, CardTitle, Col } from 'react-materialize'

class EventCard extends React.Component {
    render() {
        const { date, name, sportType, location, image } = this.props;

        return <React.Fragment>
            {/*<div class="col s12 m6 l3">
                <div class="card small">
                    <div class="card-image">
                        <img src={image} />
                        <span class="card-title">{date}</span>
                    </div>
                    <div class="card-content">
                        <p><b>{name}</b></p>
                        <p>{sportType}</p>
                        <p><i class="fas fa-location-arrow"></i>{location}</p>
                    </div>
                </div>
    </div>*/}
            <Col s={12} m={6} l={3}>
                <Card className='small'
                    header={<CardTitle image={image}>{date}</CardTitle>}>
                    <p><b>{name}</b></p>
                    <p>{sportType}</p>
                    <p><i class="fas fa-location-arrow"></i>{location}</p>
                </Card>
            </Col>
        </React.Fragment>
    }
}

export default EventCard;