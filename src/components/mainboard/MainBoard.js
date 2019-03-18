import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import Banner from './Banner';
import EventsGrid from './EventsGrid';
import AreaGrid from './AreaGrid';
import MapPlaces from './MapPlaces';
import CarouselMain from './CarouselMain';

const styles = theme => ({
    icon: {
        marginRight: theme.spacing.unit * 2,
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(500 + theme.spacing.unit * 3 * 2)]: {
            width: '70%',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    // cardGrid: {
    //     padding: `${theme.spacing.unit * 8}px 0`,
    // },
    // card: {
    //     //height: '100%',
    //     display: 'flex',
    //     flexDirection: 'column',
    // },
    // cardMedia: {
    //     paddingTop: '56.25%', // 16:9
        
    // },
    // cardContent: {
    //     flexGrow: 1,
    // },

});

function MainBoard(props) {
    const { classes } = props;

    return (
        <React.Fragment>
            <CssBaseline />
            {/* <Banner /> */}
            <div className={classNames(classes.layout, classes.cardGrid)}>
                <CarouselMain/>
                <EventsGrid />
                <AreaGrid />
                <MapPlaces />
                </div>
        </React.Fragment>
    );
}

MainBoard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainBoard);