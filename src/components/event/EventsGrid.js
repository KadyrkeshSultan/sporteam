import React from 'react';
import EventCard from './EventCard';
import { Grid, Link } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';
class EventsGrid extends React.Component {
    render() {
        const { events } = this.props;

        return <React.Fragment>
            <h2 style={{ fontWeight: '400' }}>БЛИЖАЙШИЕ МЕРОПРИЯТИЯ <Link component={'a'} href='/events'>Все &rarr;</Link> </h2>

            <Grid container spacing={24}>
                <Grid item xs={12} md={6}>
                    <h2 style={{ fontWeight: '300',marginBlockEnd: 0 }}>БЛИЖАЙШИЕ МЕРОПРИЯТИЯ</h2>
                </Grid>
                <Grid item xs={12} md={6} style={{textAlign:'right'}}>
                    <Button  href='events' color="primary" style={{
                        marginBlockStart: '1.3em',
                        textDecoration: 'none',
                        color:'black'
                        
                    }}>Все мероприятия &nbsp;<i class="fas fa-arrow-right" style={{fontSize:'inherit'}}> </i></Button >
                </Grid>
                {
                    events && events.map((item) => {
                        return <Grid key={item.id} item xs={12} sm={6} md={6} lg={3}>
                            <EventCard
                                event={item}
                            />
                        </Grid>
                    })
                }
            </Grid>
        </React.Fragment>
    }
}
export default (EventsGrid);