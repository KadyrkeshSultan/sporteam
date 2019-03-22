import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid, Avatar } from '@material-ui/core';
import Link from '@material-ui/core/Link'

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
        height:'100px'
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
});

class EventBoard extends React.Component {
    render() {

        const { classes,theme } = this.props;

        return <React.Fragment>
            <div className={classNames(classes.layout, classes.cardGrid)}>
                <Grid container>
                    <Grid item xs={12}><h2 style={{ fontWeight: '400' }}>Тренировка</h2></Grid>
                    <Grid item xs={6}><h5 style={{ fontWeight: '400' }}>Хоккей, набор участников</h5></Grid>
                    <Grid item xs={6}><h5 style={{ fontWeight: '400', textAlign: 'right' }}>Вы участник</h5></Grid>
                </Grid>
                <div style={{
                    height: '300px',
                    overflow: 'hidden',
                    position: 'relative'
                }}>
                    <CardMedia
                        style={styles.media}
                        component="img"
                        alt="Contemplative Reptile"
                        image={"https://img3.akspic.ru/image/20085-hokkej_na_ldu-hokkej-hokkejnaya_klyushka-hokkej_dzhersi-sportivnye_obekty-1920x1080.jpg?attachment=1"} />
                    <div style={{
                        width: '92%',
                        position: 'absolute',
                        top: '0px',
                        left: '20px',
                        color: 'white',
                        textShadow: "1px 1px 1px black",
                        fontSize: 18,
                    }}>
                        <Grid container>
                            <Grid item xs={6}><h5 style={{ fontWeight: '400' }}>23 сентября 2017 четверг 20:15</h5></Grid>
                            <Grid item xs={6}>
                                <h5 style={{ fontWeight: '400', textAlign: 'right' }}>
                                    <i class="fab fa-facebook-square" style={{ fontSize: '18px', color: 'white' }}>&nbsp;</i>
                                    <i class="fab fa-instagram" style={{ fontSize: '18px', color: 'white' }}>&nbsp;</i>
                                    <i class="fab fa-telegram-plane" style={{ fontSize: '18px', color: 'white' }}>&nbsp;</i>
                                    <i class="fab fa-whatsapp-square" style={{ fontSize: '18px', color: 'white' }}>&nbsp;</i>
                                </h5></Grid>
                        </Grid>
                    </div>
                </div>
                <Grid container  spacing={24}>
                    <Grid item xs={12} md={4}>
                        <h5 style={{ fontWeight: '400' }}>Организатор</h5>
                        <Card className={classes.card}>
                        {/* <CardMedia className={classes.cover} component="img" image={"https://2ch.hk/fag/thumb/5996336/15385501684090s.jpg"} />    */}
                            <Avatar src="https://2ch.hk/fag/thumb/5996336/15385501684090s.jpg" className={classes.bigAvatar}/>            
                                <div className={classes.details}>
                                <CardContent className={classes.content}>
                                    <Typography component="p" >kostya-konst</Typography>
                                    <Typography component="p" >Константин Константинов</Typography>
                                    <Link>Чат мероприятия</Link>
                                </CardContent>
                                </div>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <h5 style={{ fontWeight: '400',display:'flex' }}>Участники:15     
                    <Avatar src="https://zhazhda.biz/wp-content/uploads/2016/10/2-14-630x400.jpg" className={classes.smallAvatar}/>
                    <Avatar src="https://zhazhda.biz/wp-content/uploads/2016/10/2-14-630x400.jpg" className={classes.smallAvatar}/>
                    <Avatar src="https://zhazhda.biz/wp-content/uploads/2016/10/2-14-630x400.jpg" className={classes.smallAvatar}/>
                    </h5>
                    
                    <h5 style={{ fontWeight: '400' }}>Место проведение</h5>
                    <Card className={classes.card}>
                        <Avatar src="https://zhazhda.biz/wp-content/uploads/2016/10/2-14-630x400.jpg" className={classes.bigAvatar}/>            
                        <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="p" >Стадион юных пионеров</Typography>
                            <Typography component="p" ><i class="fas fa-location-arrow"></i> Москва, Ходынский бульвар, 4</Typography>
                            <Typography component="p" ><i class="fas fa-subway"></i> Динамо</Typography>
                            </CardContent>
                        </div>
                    </Card>
                    <br/>
                    <Card className={classes.card}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" >Дополнительная информация</Typography>
                            <Typography component="p" ><i class="fas fa-tenge"></i> Участие - 30 рублей</Typography>
                            <Typography component="p" ><i class="fas fa-users"></i> от 30 лет</Typography>
                            </CardContent>
                        </div>
                    </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                    
                    <h5 style={{ fontWeight: '400' }}>Все участники <i class="fas fa-arrow-right"></i></h5>
                    
                    </Grid>
                    
                </Grid>
            </div>
        </React.Fragment>
    }
}
EventBoard.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(EventBoard)