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
import { Link } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import EventDialog from './EventDialog';
import FilterList from '@material-ui/icons/FilterList';
import { applyFilterEvents } from '../../store/actions/eventActions';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
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

class EventList extends React.Component {
  state = {
    open: false,
  };
  

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleCloseApply = () => {
    this.setState({ open: false });
    this.props.applyFilterEvents();
  };

  render() {
    const { classes, events, filterEvents, isFilterApply } = this.props;
    const resultEvents = !isFilterApply ? events : filterEvents;
    const length = resultEvents != null ? resultEvents : 0;

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
                <Grid container justify="center">
                  <Button variant="outlined" color="default" component={Link} to="/events/create">
                    Создать событие
                  </Button>
                  &nbsp;
                  <div>
                    <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                    <FilterList />
                      Фильтр
                </Button>
                    <Dialog
                      open={this.state.open}
                      onClose={this.handleClose}
                      fullWidth={true}
                      maxWidth={'sm'}
                      aria-labelledby="form-dialog-title"
                    >
                      <DialogTitle id="form-dialog-title">Фильтр</DialogTitle>
                      <DialogContent>
                      <EventDialog/>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                          Отмена
            </Button>
                        <Button onClick={this.handleCloseApply} color="primary">
                          Применить
            </Button>
                      </DialogActions>
                    </Dialog>
                  </div>
                </Grid>
              </div>
            </div>
          </div>
          <div className={classNames(classes.layout, classes.cardGrid)}>
            {/* End hero unit */}
            {
                length < 1 ? <React.Fragment>
                    <Typography variant="h6" style={{margin: '0 auto', width: '100%', textAlign: 'center'}} gutterBottom>
                        Мероприятий не найдено
                    </Typography>
                </React.Fragment>  : ""
            }
            <Grid container spacing={24}>
              {resultEvents && resultEvents.map(event => (
                <Grid item key={event.id} sm={6} md={4} lg={3} style={{ width: '100%' }} >
                  <EventCard event={event} />
                </Grid>
              ))}
            </Grid>
          </div>
        </main>

      </React.Fragment>
    );
  }
}

EventList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
      events: state.firestore.ordered.events,
      filterEvents: state.event.filterEvents,
      isFilterApply: state.event.isFilterApply,
      auth: state.firebase.auth,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
      return {
          applyFilterEvents: () => dispatch(applyFilterEvents()),
      }
  }
  
  export default compose(
      withStyles(styles),
      connect(mapStateToProps, mapDispatchToProps),
      firestoreConnect([
        { 
            collection: 'events',
            orderBy: [
                ['createdAt', 'desc']
            ],
        },
      ])
    )(EventList)