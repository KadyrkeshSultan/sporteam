import React from 'react';
import AreaCard from './AreaCard';

const areas=[
    {
        id:1,
        name:"Ледовая площадка ДС Крылья Советов",
        location:"Москва, М.Калужская ул, 15",
        sportTypes:"Волейбол, баскетбол",
        image:"https://zhazhda.biz/wp-content/uploads/2016/10/2-14-630x400.jpg",
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
        image:"https://zhazhda.biz/wp-content/uploads/2016/10/2-14-630x400.jpg",
    },
    {
        id:4,
        name:"Ледовая площадка ДС Крылья Советов",
        location:"Москва, М.Калужская ул, 15",
        sportTypes:"Волейбол, баскетбол",
        image:"https://zhazhda.biz/wp-content/uploads/2016/10/2-14-630x400.jpg",
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