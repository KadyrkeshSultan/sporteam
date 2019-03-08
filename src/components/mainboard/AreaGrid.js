import React from 'react';
import AreaCard from './AreaCard';

const areas=[
    {
        id:1,
        name:"Ледовая площадка ДС Крылья Советов",
        location:"Москва, М.Калужская ул, 15",
        sportTypes:"Волейбол, баскетбол",
        image:"https://minsknews.by/wp-content/uploads/2014/06/Dvorets-sporta.jpg",
    },
    {
        id:2,
        name:"Ледовая площадка ДС Крылья Советов",
        location:"Москва, М.Калужская ул, 15",
        sportTypes:"Волейбол, баскетбол",
        image:"https://zhazhda.biz/wp-content/uploads/2016/10/2-14-630x400.jpg",
    },
    {
        id:3,
        name:"Ледовая площадка ДС Крылья Советов",
        location:"Москва, М.Калужская ул, 15",
        sportTypes:"Волейбол, баскетбол",
        image:"http://web.kpi.kharkov.ua/hostels/wp-content/uploads/sites/172/2017/02/metallist_kharkov_5.jpg",
    },
    {
        id:4,
        name:"Ледовая площадка ДС Крылья Советов",
        location:"Москва, М.Калужская ул, 15",
        sportTypes:"Волейбол, баскетбол",
        image:"https://www.primorsky.ru/upload/iblock/52e/52e6c902feab7da32fab83562c4aa019.jpg",
    },
]
class AreaGrid extends React.Component{
    
    render(){
        return <React.Fragment>
            <h5>ПОПУЛЯРНЫЕ МЕСТА</h5>
            <div class="row">
                {
                    areas.map((item) =>{
                        return <AreaCard key={item.id}
                            name={item.name}
                            location={item.location}
                            sportTypes={item.sportTypes}
                            image={item.image} />
                    })
                }
            </div>
        </React.Fragment>
    }
}
export default AreaGrid;