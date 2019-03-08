import React from 'react'
import Banner from './Banner';
import EventsGrid from './EventsGrid';
import AreaGrid from './AreaGrid';
import MapPlaces from './MapPlaces';

class MainBoard extends React.Component{
    render(){
        return <React.Fragment>
            <Banner></Banner>
            <div class="container">
                <div class="section">
                    <EventsGrid/>
                    <AreaGrid/>
                    <MapPlaces/>
                </div>
            </div>
        </React.Fragment>
    }
}

export default MainBoard;   