import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Grid, Typography, Link } from '@material-ui/core';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import YandexShare from '../layout/YandexShare';
import { YMaps, Map, GeoObject } from 'react-yandex-maps';

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


});

class AreaBoard extends React.Component {
    render() {

        const { classes, theme, area, areaTypes, sportTypes } = this.props;
        const areaType = area.id && (areaTypes && areaTypes.find(item => item.id == area.type.id));
        const sports = area.id && (sportTypes && sportTypes.filter(item => area.sportTypes.find(i => i.id == item.id) != undefined));
        const latitude = area.id && area.location.latitude;
        const longitude = area.id && area.location.longitude;
        const center = (latitude != null && latitude != '') ? [latitude, longitude] : [51.132435, 71.404126];
        const location = {
            center: center,
            zoom: 16
        }
        return <React.Fragment>
            <div className={classNames(classes.layout, classes.cardGrid)}>
                <Grid container justify='space-between'>
                    <Grid item xs={12} sm={6}>
                        <h2 style={{ fontWeight: '400' }}>{area.id && area.name}</h2>
                        <h3><YandexShare /></h3>
                    </Grid>
                </Grid>
                <Carousel showArrows={true} autoPlay={true} showThumbs={false} dynamicHeight={false} useKeyboardArrows={true} swipeable={true} emulateTouch={true} showStatus={false}>
                    {
                        area.id && area.images.map(item => {
                            return <div key={item.filename}>
                                <img src={item.url} style={{ height: '300px', objectFit: 'cover' }} />
                            </div>
                        })
                    }
                </Carousel>
                <br />
                <Grid container spacing={24}>
                    <Grid item xs={12} md={6} style={{ paddingLeft: '30px' }}>
                        <Typography component="p"><i className="fas fa-location-arrow"></i> {area.id && area.location.address}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <blockquote>
                            <Typography component="p" align="justify">
                                {area.id && area.description}
                            </Typography>
                        </blockquote>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography component="h4"><b>Режим работы</b></Typography><br />
                        <Typography component="p" >{area.id && area.worktime}</Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography component="h4"><b>Характеристики</b></Typography><br />
                        <Typography component="p" ><b> Тип площадки:</b> {areaType && areaType.name}</Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography component="h4"><b>Стоимость</b></Typography><br />
                        <Typography component="p" > {area.id && area.price}</Typography>

                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography component="h4"><b>Контакты</b></Typography><br />
                        <Typography component="p" > {area.id && area.contacts}</Typography>

                    </Grid>
                    <Grid item xs={2} style={{ textAlign: 'center', letterSpacing: '40px' }}>
                        <i className="fas fa-lightbulb" style={{ fontSize: '28px', color: 'lightgreen' }}></i>
                    </Grid>
                    <Grid item xs={2} style={{ textAlign: 'center', letterSpacing: '40px' }}>
                        <i className="fas fa-wifi" style={{ fontSize: '28px', color: 'lightgreen' }}></i>
                    </Grid>
                    <Grid item xs={2} style={{ textAlign: 'center', letterSpacing: '40px' }}>
                        <i className="fas fa-coffee" style={{ fontSize: '28px', color: 'lightgreen' }}></i>
                    </Grid>
                    <Grid item xs={2} style={{ textAlign: 'center', letterSpacing: '40px' }}>
                        <i className="fas fa-car" style={{ fontSize: '28px', color: 'lightgreen' }}></i>
                    </Grid>
                    <Grid item xs={2} style={{ textAlign: 'center', letterSpacing: '40px' }}>
                        <i className="fas fa-medkit" style={{ fontSize: '28px', color: 'lightgreen' }}></i>
                    </Grid>
                    <Grid item xs={2} style={{ textAlign: 'center', letterSpacing: '40px' }}>
                        <i className="fas fa-shower" style={{ fontSize: '28px', color: 'lightgreen' }}></i>
                    </Grid>

                </Grid>
            </div>
            <br />
            <Grid style={{ margin: '0 auto', textAlign: 'center', width: '90%' }}>
                <YMaps>
                    <Map width={'100%'} height={400} defaultState={location}>
                        <GeoObject
                            geometry={{
                                type: 'Point',
                                coordinates: location.center,
                            }}
                        />
                    </Map>
                </YMaps>
            </Grid>
        </React.Fragment>
    }
}
AreaBoard.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        area: state.area.selectArea,
        sportTypes: state.firestore.ordered.categorySports,
        areaTypes: state.firestore.ordered.sportgroundstype
    }
}
export default compose(
    withStyles(styles),
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'categorySports' },
        { collection: 'sportgroundstype' }
    ])
)(AreaBoard)