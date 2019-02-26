import React from 'react';
import EventCard from './EventCard';

const events = [
    {
        id: 1,
        date: "20 февраля",
        location: "Б.Сергиевский пер, 20",
        sportType: "Академическая гребля",
        image: "http://cdn.chatsports.com/thumbnails/5091-69818-original.jpeg",
    },
    {
        id: 2,
        date: "20 февраля",
        location: "Б.Сергиевский пер, 20",
        sportType: "Академическая гребля",
        image: "http://cdn.chatsports.com/thumbnails/5091-69818-original.jpeg",
    },
    {
        id: 3,
        date: "20 февраля",
        location: "Б.Сергиевский пер, 20",
        sportType: "Академическая гребля",
        image: "http://cdn.chatsports.com/thumbnails/5091-69818-original.jpeg",
    },
    {
        id: 4,
        date: "20 февраля",
        location: "Б.Сергиевский пер, 20",
        sportType: "Академическая гребля",
        image: "http://cdn.chatsports.com/thumbnails/5091-69818-original.jpeg",
    }
]
class EventsGrid extends React.Component{
    render(){
        return <React.Fragment>
            <h5>БЛИЖАЙШИЕ МЕРОПРИЯТИЯ</h5>
            <div class="row">
                {
                    events.map((item) =>{
                        return <EventCard key={item.id}
                            date={item.date}
                            name={item.name}
                            location={item.location}
                            sportType={item.sportType}
                            image={item.image} />
                    })
                }
            </div>
        </React.Fragment>
    }
}
export default EventsGrid;