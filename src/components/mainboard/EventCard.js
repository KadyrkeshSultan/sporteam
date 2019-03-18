import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
       position: 'relative',
    },
    overlay: {
       position: 'absolute',
       top: '100px',
       left: '20px',
       color: 'white',
       textShadow:"1px 1px 1px black",
       fontSize: 18,

    }
 }
class EventCard extends React.Component {
    render() {
        const { date, name, sportType, location, image } = this.props;
        return (
            <Card style={styles.card}>
                <CardActionArea >
                    <div style={{
                        height: '140px',
                        overflow: 'hidden',
                    }}>
                        <CardMedia
                            style={styles.media}
                            component="img"
                            alt="Contemplative Reptile"
                            image={image}
                        />
                        <div style={styles.overlay}>
                            {date}
                        </div>
                    </div>
                    <CardContent>
                        <Typography variant="inherit" noWrap>
                            <b>{name}</b>
                        </Typography>
                        <Typography component="p" variant="inherit" noWrap>
                            {sportType}
                        </Typography>
                        <Typography variant="inherit" noWrap>
                            <i class="fas fa-location-arrow"></i>{location}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
}

export default EventCard;