import React from 'react';

class AreaCard extends React.Component{
    render(){
        const { name, sportTypes, location,image } = this.props;

        return <React.Fragment>
            <div class="col s12 m6 l3">
                <div class="card small">
                    <div class="card-image">
                        <img src={image}/>
                    </div>
                    <div class="card-content">
                        <p><b>{name}</b></p>
                        <p><i class="fas fa-location-arrow"></i>{location}</p>
                        <p>{sportTypes}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
}

export default AreaCard;