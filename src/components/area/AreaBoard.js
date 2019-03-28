import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Grid, Typography, Link} from '@material-ui/core';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

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

        const { classes,theme } = this.props;

        return <React.Fragment>
            <div className={classNames(classes.layout, classes.cardGrid)}>
            <Grid container>
                <Grid item xs={12} md={6}>
                <h2 style={{ fontWeight: '400' }}>Ледовая площадка ОК "Лужники"</h2>
                <h5 style={{ fontWeight: '400' }}>Входит в состав "Лужники"</h5>
                </Grid>
                <Grid item xs={12} md={6}>
                </Grid>
            </Grid>
            <Carousel showArrows={true} autoPlay={true} showThumbs={false} dynamicHeight={false} useKeyboardArrows={true} swipeable={true} emulateTouch={true} showStatus={false}>
          <div >
            <img src="https://itd2.mycdn.me/image?id=850604732307&t=20&plc=WEB&tkn=*wBRLLaXtkm34eqMg1mSbUIPEvO0" style={{height:'300px',objectFit:'cover'}}/>
            <p className="legend" style={{backgroundColor:'#0000'}}>Legend 1</p>
          </div>
          <div>
          <img src="https://itd2.mycdn.me/image?id=850604732307&t=20&plc=WEB&tkn=*wBRLLaXtkm34eqMg1mSbUIPEvO0" style={{height:'300px',objectFit:'cover'}}/>
            <p className="legend" style={{backgroundColor:'#0000'}}>Legend 2</p>
          </div>
          <div>
          <img src="https://itd2.mycdn.me/image?id=850604732307&t=20&plc=WEB&tkn=*wBRLLaXtkm34eqMg1mSbUIPEvO0" style={{height:'300px',objectFit:'cover'}}/>
            <p className="legend" style={{backgroundColor:'#0000'}}>Legend 3</p>
          </div>
          <div>
          <img src="https://itd2.mycdn.me/image?id=850604732307&t=20&plc=WEB&tkn=*wBRLLaXtkm34eqMg1mSbUIPEvO0" style={{height:'300px',objectFit:'cover'}}/>
            <p className="legend" style={{backgroundColor:'#0000'}}>Legend 4</p>
          </div>
          <div>
          <img src="https://itd2.mycdn.me/image?id=850604732307&t=20&plc=WEB&tkn=*wBRLLaXtkm34eqMg1mSbUIPEvO0" style={{height:'300px',objectFit:'cover'}}/>
            <p className="legend" style={{backgroundColor:'#0000'}}>Legend 5</p>
          </div>
          <div>
          <img src="https://itd2.mycdn.me/image?id=850604732307&t=20&plc=WEB&tkn=*wBRLLaXtkm34eqMg1mSbUIPEvO0" style={{height:'300px',objectFit:'cover'}}/>
            <p className="legend" style={{backgroundColor:'#0000'}}>Legend 6</p>
          </div>
        </Carousel>
            <br/>
            <Grid container spacing={24}>
                <Grid item xs={12} md={6} style={{paddingLeft:'30px'}}>
                    <Typography component="p"><i class="fas fa-location-arrow"></i> Москва, ул.Пушкина 12/1</Typography>
                    <Typography component="p"><i class="fas fa-subway"></i> Темирязевская</Typography>
                    <Typography component="p"><i class="fas fa-subway"></i> Петровско-Разумовская</Typography>
                </Grid>
                <Grid item xs={12} md={6} style={{paddingRight:'30px'}}>
                    <Typography component="p" style={{textAlign:'right'}}><i class="fas fa-phone"></i> +7 (903) 567-89-78,+(903)-567-89-79</Typography>
                    <Typography component="p" style={{textAlign:'right'}}><i class="fas fa-desktop"></i> <Link>www.luzhniki.ru</Link></Typography>
                </Grid>
                <Grid item xs={12}>
                    <blockquote>
                        <Typography component="p" align="justify">
                        Малая спортивная арена Олимпийского комплекса «Лужники» (ранее Центрального стадиона им. В. И. Ленина) — крытый стадион вместимостью 8700 мест, расположенный в Москве. Арена была построена в 1956 году в СССР. Она принимала волейбольные соревнования на летних Олимпийских играх 1980 года[1]. На ней также проходили соревнования в рамках летней Универсиады 1973 года, Игр доброй воли 1986 года, Спартакиад народов СССР и других турниров.
                        </Typography>
                    </blockquote>
                </Grid>
                <Grid item xs={12} md={3}>
                <Typography component="h4"><b>Режим работы</b></Typography><br/>
                <Typography component="p" ><b> пн-сб</b> 06:30-23:30</Typography>
                <Typography component="p" ><b> вс</b> выходной</Typography>  
                <Typography component="p" ><b> перерыв</b> 12:00-14:00</Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                <Typography component="h4"><b>Характеристики</b></Typography><br/>
                <Typography component="p" ><b> Тип</b> Крытая</Typography>  
                </Grid>
                <Grid item xs={12} md={3}>
                <Typography component="h4"><b>Стоимость</b></Typography><br/>
                <Typography component="p" > от 3000 тг/час</Typography>
                
                </Grid>
                <Grid item xs={12} md={3}>
                <Typography component="h4"><b>Контакты</b></Typography><br/>
                <Typography component="p" > Иванов Иван Иванович</Typography>
                
                </Grid>
                <Grid item xs={2} style={{textAlign:'center',letterSpacing:'40px'}}>
                <i class="fas fa-lightbulb" style={{fontSize:'28px',color:'lightgreen'}}></i>
                </Grid>
                <Grid item xs={2} style={{textAlign:'center',letterSpacing:'40px'}}>
                <i class="fas fa-wifi" style={{fontSize:'28px',color:'lightgreen'}}></i>
                </Grid>
                <Grid item xs={2} style={{textAlign:'center',letterSpacing:'40px'}}>
                <i class="fas fa-coffee" style={{fontSize:'28px',color:'lightgreen'}}></i>
                </Grid>
                <Grid item xs={2} style={{textAlign:'center',letterSpacing:'40px'}}>
                <i class="fas fa-car" style={{fontSize:'28px',color:'lightgreen'}}></i>
                </Grid>
                <Grid item xs={2} style={{textAlign:'center',letterSpacing:'40px'}}>
                <i class="fas fa-medkit" style={{fontSize:'28px',color:'lightgreen'}}></i>
                </Grid>
                <Grid item xs={2} style={{textAlign:'center',letterSpacing:'40px'}}>
                <i class="fas fa-shower" style={{fontSize:'28px',color:'lightgreen'}}></i>
                </Grid>
                
            </Grid>
            </div>
            <br/>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Af5a217ff4e2b68222d3a6fc45d1d58611a8dfefa31b95d6ec074d1a3a2ec6d08&amp;source=constructor" width="100%" height="400" frameBorder="0"></iframe>
        </React.Fragment>
    }
}
AreaBoard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AreaBoard)