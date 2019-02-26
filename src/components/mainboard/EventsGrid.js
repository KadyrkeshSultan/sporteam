import React from 'react';
import EventCard from './EventCard';

class EventsGrid extends React.Component{
    render(){
        return <React.Fragment>
            <h5>БЛИЖАЙШИЕ МЕРОПРИЯТИЯ</h5>
            <div class="row">
                <EventCard
                    date="20 февраля"
                    name="Недельная тренировка в Карелии"
                    location="Б.Сергиевский пер, 20"
                    sportType="Академическая гребля" />
                <EventCard
                    date="20 февраля"
                    name="Недельная тренировка в Карелии"
                    location="Б.Сергиевский пер, 20"
                    sportType="Академическая гребля" />
                <EventCard
                    date="20 февраля"
                    name="Недельная тренировка в Карелии"
                    location="Б.Сергиевский пер, 20"
                    sportType="Академическая гребля" />
                <EventCard
                    date="20 февраля"
                    name="Недельная тренировка в Карелии"
                    location="Б.Сергиевский пер, 20"
                    sportType="Академическая гребля" />
            </div>
        </React.Fragment>
    }
}
export default EventsGrid;