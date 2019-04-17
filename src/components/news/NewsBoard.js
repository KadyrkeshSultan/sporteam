import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid, Avatar } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import moment from 'moment';
import 'moment/locale/ru';
import YandexShare from '../layout/YandexShare';
import Paper from '@material-ui/core/Paper'

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
    card: {
        display: 'flex',

    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 'auto',
        height: '100px'
    },
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
    },
    smallAvatar: {
        margin: 2,
        width: 20,
        height: 20,
    },
    
    [theme.breakpoints.down('sm')]: {
        imageEvent: {
            maxHeight: '300px',
            overflow: 'hidden',
            position: 'relative'
        }
    },
    [theme.breakpoints.up('md')]: {
        imageEvent: {
            maxHeight: '390px',
            overflow: 'hidden',
            position: 'relative'
        }
    },
});

class NewsBoard extends React.Component {
    render() {

        const { classes, event, categorySports } = this.props;
        const templatePic = "https://sputniknews.kz/images/552/34/5523465.jpg";
        const categorySport = event && (categorySports && categorySports.find(item => item.id === event.categorySport.id))

        return <React.Fragment>
            <div className={classNames(classes.layout, classes.cardGrid)}>
                <Grid container>
                    <Grid item xs={12}><br/>
                            <Typography variant="h5" component="h3" style ={{textAlign:'justify'}}>
                            Казахстанец встретится на ринге Madison Square Garden 8 июня со Стивом Роллсом
                            </Typography>
                        <h3><YandexShare /></h3>
                        
                    </Grid>
                    
                    {/* <Grid item xs={6}><h5 style={{ fontWeight: '400', textAlign: 'right' }}>Вы участник</h5></Grid> */}
                </Grid>
                <Grid container spacing={24}>
                <Grid item xs={12}>
                <div className={classes.imageEvent}>
                    <CardMedia
                        style={styles.media}
                        component="img"
                        alt="Contemplative Reptile"
                        // image={categorySport == null ? templatePic : categorySport.pictureUrl}
                        image={'https://sputniknews.kz/images/552/34/5523465.jpg'} />
                    <div style={{
                        width: '92%',
                        position: 'absolute',
                        top: '0px',
                        left: '20px',
                        color: 'white',
                        textShadow: "1px 1px 1px black",
                        fontSize: 18,
                    }}>
                            <h3 style={{ fontWeight: '400' }}>Официально объявлен новый соперник Головкина</h3>
                    </div>
                </div>
                </Grid>
                </Grid>
                <Grid container spacing={24}>
                    <Grid item xs={12} md={2}>
                    
                    </Grid> 
                    <Grid item xs={12} md={8}>

                    <Typography content="p">{moment(event && event.date.toDate()).locale('ru').format('llll')}</Typography>
                        <Paper className={classes.root} elevation={1}>
                            
                            <Typography component="p" style ={{textAlign:'justify',padding:'20px'}}>
                            Стриминговая платформа DAZN официально анонсировала бой казахстанского боксера, экс-чемпиона мира в среднем весе Геннадия Головкина.

Поединок состоится 8 июня в Нью-Йорке (США), на арене Madison Square Garden, сообщает Sports.kz. Головкин встретится на ринге с 35-летним боксером из Канады Стивом Роллсом (19-0, 10 КО). 


​Стоит отметить, что этот бой пройдет в промежуточном весе — 164 фунта. Ранее Головкин дрался исключительно в лимите в 160 фунтов.

​Напомним, казахстанский боксер 15 сентября 2018 года потерпел первое поражение в профессиональной карьере — он уступил во втором поединке Саулю "Канело" Альваресу (51-1-2, 34 КО) решением большинства судей.

Тест для фанатов Головкина: что вы не знаете о казахстанском боксере

В случае, если Головкин побьет Роллса, а "Канело" 4 мая окажется сильнее Дэниэла Джейкобса (35-2, 29 КО), в сентябре пройдет третий бой GGG и Альвареса.

Головкин вошел в число ста самых популярных спортсменов мира

                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    }
}
NewsBoard.propTypes = {
    classes: PropTypes.object.isRequired,
};


const mapStateToProps = (state) => {
    return {
        event: state.firestore.ordered.selectEvent && state.firestore.ordered.selectEvent[0],
        categorySports: state.firestore.ordered.categorySports
    }
}
export default compose(
    withStyles(styles),
    connect(mapStateToProps),
    firestoreConnect(props =>{
        const {id} = props.match.params;
        return [
            {collection: 'categorySports'},
            {
                collection: 'events',
                doc: id,
                storeAs: 'selectEvent'
            }
        ]
    })
)(NewsBoard)