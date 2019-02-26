import React from 'react'
import Banner from './Banner';
import EventsGrid from './EventsGrid';
import AreaGrid from './AreaGrid';

class MainBoard extends React.Component{
    render(){
        return <React.Fragment>
            <Banner></Banner>
            <div class="container">
                <div class="section">
                    <EventsGrid/>
                    <AreaGrid/>
                </div>
            </div>
        </React.Fragment>
    }
}

export default MainBoard;   