import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import EventCard from './EventCard'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';


const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 2}px 0 ${theme.spacing.unit * 1}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});

function EventList(props) {
  const { classes, events } = props;
  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
              Все события
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Найдите подходящее вам событие или создайте событие
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container  justify="center">
                  <Button variant="contained" color="primary">
                    Создать событие
                  </Button>
              </Grid>
            </div>
          </div>
        </div>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container direction="row" justify="center" alignItems="center" spacing={40}>
            {events && events.map(event => (
              <Grid item key={event.id} sm={6} md={4} lg={3} style={{width: '100%'}} >
                    <EventCard event={event} />
              </Grid>
            ))}
          </Grid>
        </div>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

EventList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        events: state.firestore.ordered.events,
    }
}
export default compose(
    withStyles(styles),
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'events'},
    ])
)(EventList)