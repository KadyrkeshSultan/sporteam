import React from 'react';
import EventCard from './EventCard';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });

class EventsGrid extends React.Component {
    render() {
        const { events } = this.props;

        return <React.Fragment>
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
export default withStyles(styles)(EventsGrid);