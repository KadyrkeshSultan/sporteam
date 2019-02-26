import React from 'react';

class AreaCard extends React.Component{
    render(){
        const { name, sportTypes, location } = this.props;

        return <React.Fragment>
            <div class="col s12 m3">
                <div class="card small">
                    <div class="card-image">
                        <img src="images/feathers.jpg" />
                    </div>
                    <div class="card-content">
                        <p><b>{name}</b></p>
                        <p><i class="material-icons">location_on</i>{location}</p>
                        <p>{sportTypes}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
}

export default AreaCard;