import React from 'react';
import EventCard from './EventCard';

const events = [
    {
        id: 1,
        date: "20 сентября",
        name: "Наша игра",
        location: "Москва, Б.Сергиевский пер, 20",
        sportType: "Баскетбол",
        image: "http://cdn.chatsports.com/thumbnails/5091-69818-original.jpeg",
    },
    {
        id: 2,
        date: "4 мая",
        name: "Тренировка в Карелии",
        location: "Екатеринбург, Б.Сергиевский пер, 20",
        sportType: "Академическая гребля",
        image: "https://st3.depositphotos.com/1029233/16183/i/450/depositphotos_161830512-stock-photo-friends-group-having-fun-together.jpg",
    },
    {
        id: 3,
        date: "15 августа",
        name: "Матч Спартак-Динамо",
        location: "Новосибирск, Красный проспект",
        sportType: "Волейбол",
        image: "https://www.volleyballgearguide.com/wp-content/uploads/2018/11/volleyball-players-1024x616.jpg",
    },
    {
        id: 4,
        date: "24 сентября",
        name: "Пробежка по средам",
        location: "Санкт-Петербург, ул.Московская",
        sportType: "Бег",
        image: "https://i1.wp.com/www.lifemartini.com/wp-content/uploads/2015/03/Combine-Aerobics-And-Anaerobic-Exercises.jpg?resize=650%2C400",
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