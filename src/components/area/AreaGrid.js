import React from 'react';
import AreaCard from './AreaCard';
import { Grid } from '@material-ui/core';

const areas=[
    {
        id:1,
        name:"Ледовая площадка ДС Крылья Советов",
        location:"Москва, М.Калужская ул, 15",
        sportTypes:"Волейбол, баскетбол",
        image:"https://regions.kidsreview.ru/sites/default/files/styles/card_600_400/public/07/28/2014_-_2017/aysberg.jpg",
    },
    {
        id:2,
        name:"Ледовая площадка ДС Крылья Советов",
        location:"Москва, М.Калужская ул, 15",
        sportTypes:"Волейбол, баскетбол",
        image:"https://s1.1zoom.ru/b4948/Footbal_Ball_Lawn_Stadium_561095_300x225.jpg",
    },
    {
        id:3,
        name:"Ледовая площадка ДС Крылья Советов",
        location:"Москва, М.Калужская ул, 15",
        sportTypes:"Волейбол, баскетбол",
        image:"https://www.soccerphile.com/soccerphile/euro2012/im/metalist-stadium-1.jpg",
    },
    {
        id:4,
        name:"Ледовая площадка ДС Крылья Советов",
        location:"Москва, М.Калужская ул, 15",
        sportTypes:"Волейбол, баскетбол",
        image:"https://s3-eu-west-1.amazonaws.com/civil-files/2017_poltava_projects/53.jpg",
    },
]
class AreaGrid extends React.Component{
    
    render(){
        return <React.Fragment>
        <h2 style={{fontWeight: '400'}}>ПОПУЛЯРНЫЕ МЕСТА</h2>
        
        <Grid container spacing={24}>
            {
                areas.map((item) =>{
                    return <Grid key={item.id} item xs={12} sm={6} md={6} lg={3}>
                    <AreaCard 
                        name={item.name}
                        location={item.location}
                        sportType={item.sportType}
                        image={item.image} />
                        </Grid>
                })
            }
            </Grid>           
    </React.Fragment>
    }
}
export default AreaGrid;