import React from 'react';



class MapPlaces extends React.Component {
    render() {
        
        return <React.Fragment>
            
            <h4 align="center">ВСЕГДА РЯДОМ</h4>
            <div className ="row">
                <div className ="col s12">
                    <ul className ="tabs">
                        <li className ="tab col s6"><a href="#test1" >МЕРОПРИЯТИЯ</a></li>
                        <li className ="tab col s6"><a href="#test2" >ПЛОЩАДКИ</a></li>
                    </ul>
                </div>
                <div id="test1" className ="col s12">
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Af5a217ff4e2b68222d3a6fc45d1d58611a8dfefa31b95d6ec074d1a3a2ec6d08&amp;source=constructor" width="100%" height="600" frameborder="0"></iframe>
                </div>
                <div id="test2" className ="col s12">
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Af5a217ff4e2b68222d3a6fc45d1d58611a8dfefa31b95d6ec074d1a3a2ec6d08&amp;source=constructor" width="100%" height="600" frameborder="0"></iframe>
                </div>
            </div>
        </React.Fragment>
    }
}

export default MapPlaces;