import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import moment from 'moment';
import 'moment/locale/ru';
import { compose} from 'redux'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';


const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

function EventCard(props) {
    const { classes, event, categorySports } = props;
    const loaderPic = "https://thumbs.gfycat.com/ArcticWarmBettong-max-1mb.gif";
    const categorySport = categorySports && categorySports.find((item) => {return item.id === event.categorySport.id})
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        title={event.name}
        subheader={moment(event.date.toDate()).locale('ru').format('llll')}
      />
      <CardMedia
        className={classes.media}
        image={categorySport == null ? loaderPic : categorySport.pictureUrl}
        title={categorySport == null ? "" : categorySport.name}
      />
      <CardContent>
        <Typography component="p">
          {event.desc}
        </Typography>
      </CardContent>
      <CardActions className={classes.actions} disableActionSpacing>
        <Button size="small" color="primary">
          Подробнее
        </Button>
      </CardActions>
    </Card>
  );
}

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
)(EventCard)