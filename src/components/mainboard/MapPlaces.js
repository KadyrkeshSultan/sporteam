import React from 'react';
import {Tabs,Tab} from 'react-materialize'



class MapPlaces extends React.Component {
    render() {
        return <React.Fragment>
            <h4 align="center">ВСЕГДА РЯДОМ</h4>
            <Tabs className='tab-demo z-depth-1'>
                <Tab title="МЕРОПРИЯТИЯ" active><iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Af5a217ff4e2b68222d3a6fc45d1d58611a8dfefa31b95d6ec074d1a3a2ec6d08&amp;source=constructor" width="100%" height="600" frameborder="0"></iframe></Tab>
                <Tab title="ПЛОЩАДКИ" ><iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Af5a217ff4e2b68222d3a6fc45d1d58611a8dfefa31b95d6ec074d1a3a2ec6d08&amp;source=constructor" width="100%" height="600" frameborder="0"></iframe></Tab>
            </Tabs>
        </React.Fragment>
    }
}

export default MapPlaces;