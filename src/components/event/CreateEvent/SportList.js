import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { compose} from 'redux'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
    width: '100%'
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
});

class SportList extends React.Component {
  state = {
    dense: false,
    secondary: false,
  };

  render() {
    const { classes, categorySports } = this.props;
    const { dense } = this.state;

    return (
      <div className={classes.root}>
          <Grid>
            <Typography variant="h6" align='center' className={classes.title}>
              Что организуем?
            </Typography>
            <div className={classes.demo}>
              <List dense={dense}>
                {
                    categorySports && categorySports.map((sport) => {
                        return <ListItem key={sport.id} button>
                            <ListItemAvatar>
                                <Avatar src={sport.iconUrl}>
                                    
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={sport.name}
                            />
                        </ListItem>
                    })
                }
              </List>
            </div>
          </Grid>
      </div>
    );
  }
}

SportList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        categorySports: state.firestore.ordered.categorySports
    }
}
export default compose(
    withStyles(styles),
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'categorySports'}
    ])
)(SportList)