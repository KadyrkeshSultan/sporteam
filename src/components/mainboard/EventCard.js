import React from 'react';

class EventCard extends React.Component{
    render(){
        const { date, name, sportType, location, image } = this.props;

        return <React.Fragment>
            <div class="col s12 m3">
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
            </div>
        </React.Fragment>
    }
}

export default EventCard;