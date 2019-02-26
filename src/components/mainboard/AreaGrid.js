import React from 'react';
import AreaCard from './AreaCard';

class AreaGrid extends React.Component{
    render(){
        return <React.Fragment>
            <h5>ПОПУЛЯРНЫЕ МЕСТА</h5>
            <div class="row">
                <AreaCard
                    name="Ледовая площадка ДС Крылья Советов"
                    location="Москва, М.Калужская ул, 15"
                    sportTypes="Волейбол, баскетбол, " />
                <AreaCard
                    name="Ледовая площадка ДС Крылья Советов"
                    location="Москва, М.Калужская ул, 15"
                    sportTypes="Волейбол, баскетбол, " />
                <AreaCard
                    name="Ледовая площадка ДС Крылья Советов"
                    location="Москва, М.Калужская ул, 15"
                    sportTypes="Волейбол, баскетбол, " />
                <AreaCard
                    name="Ледовая площадка ДС Крылья Советов"
                    location="Москва, М.Калужская ул, 15"
                    sportTypes="Волейбол, баскетбол, " />
            </div>
        </React.Fragment>
    }
}
export default AreaGrid;