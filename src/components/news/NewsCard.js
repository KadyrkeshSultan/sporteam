import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';
import 'moment/locale/ru';

const styles = {
    card: {
        position: 'relative',
    },
    overlay: {
        position: 'absolute',
        top: '100px',
        left: '20px',
        color: 'white',
        textShadow: "1px 1px 1px black",
        fontSize: 18,

    }
}
class NewsCard extends React.Component {
    render() {
        const { event, categorySports } = this.props;
        const loaderPic = "https://thumbs.gfycat.com/ArcticWarmBettong-max-1mb.gif";
        const categorySport = categorySports && categorySports.find((item) => { return item.id === event.categorySport.id })

        return ( 
            <Card style={styles.card}>
                <CardActionArea>
                    <div style={{
                        height: '200px',
                        overflow: 'hidden',
                    }}>
                        <CardMedia
                            style={styles.media}
                            image={'https://sputniknews.kz/images/552/34/5523465.jpg'}
                            component="img"
                            alt="Sport Calendar Image"
                        />
                    </div>
                    <CardContent>
                        <Typography variant="inherit" noWrap>
                            <b>Казахстанец встретится на ринге Madison Square Garden 8 июня со Стивом Роллсом</b>
                        </Typography>
                        <Typography variant="inherit" noWrap>
                            24 april
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
}

export default withStyles(styles)(NewsCard)