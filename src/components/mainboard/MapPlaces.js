import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';


function TabContainer(props) {
  return (
    <Typography component="div">
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class MapPlaces extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
        <React.Fragment>
      <h2 style={{fontWeight: '400'}} align="center" >ВСЕГДА РЯДОМ</h2>
      
      <AppBar position="static" style={{color:'black', backgroundColor:'white'}} >
          <Tabs value={value} onChange={this.handleChange} variant="fullWidth" indicatorColor="primary">
            <Tab label="Мероприятия" />
            <Tab label="Площадки" />
          </Tabs>

        </AppBar>
        {value === 0 && <TabContainer><br/><iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Af5a217ff4e2b68222d3a6fc45d1d58611a8dfefa31b95d6ec074d1a3a2ec6d08&amp;source=constructor" width="100%" height="600" frameborder="0"></iframe></TabContainer>}
        {value === 1 && <TabContainer><br/><iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Af5a217ff4e2b68222d3a6fc45d1d58611a8dfefa31b95d6ec074d1a3a2ec6d08&amp;source=constructor" width="100%" height="600" frameborder="0"></iframe></TabContainer>}

      </React.Fragment>
    );
  }
}

MapPlaces.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MapPlaces);