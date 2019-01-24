import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EventTimeForm from './EventTimeForm';
import EventNameForm from './EventNameForm';
import SportList from './SportList'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {clickNextBtn, clickBackBtn, chooseSport, eventNameChange} from '../../../store/actions/eventActions'
import { firestoreConnect } from 'react-redux-firebase';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3,
    },
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  },
});

const steps = ['Что организуем?', 'Название', 'Когда?'];

function getStepContent(step, props) {
    const {chooseSport, categorySports, categorySportId, eventNameChange, eventName} = props;
  switch (step) {
    case 0:
      return <SportList categorySports={categorySports} chooseSport={chooseSport}/>;
    case 1:
      return <EventNameForm
      eventNameChange={eventNameChange} 
      categorySportId={categorySportId} 
      categorySports={categorySports}
      eventName={eventName}
       />;
    case 2:
      return <EventTimeForm />;
    default:
      throw new Error('Unknown step');
  }
}

class CreateEventForm extends React.Component {
  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes } = this.props;
    const { activeStep } = this.props;
    console.log(this.props);
    return (
      <React.Fragment>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h5" align="center">
              Создать событие
            </Typography>
            <Stepper activeStep={activeStep} alternativeLabel className={classes.stepper}>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Thank you for your order.
                  </Typography>
                  <Typography variant="subtitle1">
                    Your order number is #2001539. We have emailed your order confirmation, and will
                    send you an update when your order has shipped.
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {getStepContent(activeStep, this.props)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={this.props.clickBackBtn} className={classes.button}>
                        Назад
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.props.clickNextBtn}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Place order' : 'Вперед'}
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

CreateEventForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        activeStep: state.event.activeStep,
        categorySports: state.firestore.ordered.categorySports,
        categorySportId: state.event.categorySportId,
        eventName: state.event.eventName
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        clickNextBtn: () => dispatch(clickNextBtn()),
        clickBackBtn: () => dispatch(clickBackBtn()),
        chooseSport: (categorySportId) => dispatch(chooseSport(categorySportId)),
        eventNameChange: (eventName) => dispatch(eventNameChange(eventName))
    }
}

export default compose(
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'categorySports'}
    ])
)(CreateEventForm)